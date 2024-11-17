import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


interface UserProfile {
  response: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  address: string;
  clothes_size: string;
  footwear_size: string;
  date_of_birth: string;
}


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProfilPage implements OnInit {
  currentPage: string = 'profil';
  selectedDateStart: string = '';
  selectedDateEnd: string = '';
  formattedDate1: string = '';
  formattedDate2: string = '';
  applyForm= new FormGroup ({
    ime: new FormControl("", Validators.required),
    prezime: new FormControl("", Validators.required),
    mobitel: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    adresa: new FormControl("", Validators.required),
    odjeća: new FormControl("", Validators.required),
    obuća: new FormControl("", Validators.required),
    datum_rodenja: new FormControl("", Validators.required)
  })

  formSubmitted: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private http: HttpClient,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.fetchUserData();
    } else {
      this.router.navigate(['/home']);
    }
  }

  highlightedDates = [
    {
      date: '2023-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-01-20',
      textColor: 'var(--ion-color-secondary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)',
    },
    {
      date: '2023-01-23',
      textColor: 'rgb(68, 10, 184)',
      backgroundColor: 'rgb(211, 200, 229)',
    },
  ];

  onDateChange(event: any, type: string) {
    const selectedDate = event.detail.value;
    const date = new Date(selectedDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    if (type === 'datum_rodenja') {
      this.selectedDateStart = selectedDate;
      this.formattedDate2 = formattedDate;
      this.applyForm.patchValue({ datum_rodenja: formattedDate });
    }    
  }

  openPopover(event: Event, popoverId: string) {
    const popover = document.querySelector(`ion-popover[trigger="${popoverId}"]`);
    if (popover) {
      (popover as any).present({
        ev: event
      });
    }
  }

  async fetchUserData() {
    const credentials = this.authService.getHashedCredentials();
    
    if (!credentials) {
      this.errorMessage = 'Failed to retrieve credentials.';
      this.router.navigate(['/home']);
      return;
    }
  
    const authPayload = {
      username: credentials.hashedUsername,
      password: credentials.hashedPassword
    };
  
    try {
      const data = await this.http.post<UserProfile[]>('https://bvproduct.app/api/profile.php', authPayload).toPromise();
      console.log(data)
  
      if (data && Array.isArray(data) && data.length > 0 && data[0].response === 'Success') {
        console.log(data)
        this.applyForm.patchValue({
          ime: data[0].name,
          prezime: data[0].surname,
          mobitel: data[0].phone,
          email: data[0].email,
          adresa: data[0].address,
          odjeća: data[0].clothes_size,
          obuća: data[0].footwear_size,
          datum_rodenja: data[0].date_of_birth
        });
      } else {
        this.errorMessage = 'Failed to fetch user data. API returned an unexpected response.';
        console.error('Failed to fetch user data', data);
      }
    } catch (error) {
      this.errorMessage = 'An error occurred while fetching user data. Please try again later.';
      console.error('Error fetching user data', error);
    }
  }
  
      unosProfila() {
        if (this.applyForm.valid) {
            const formData = this.applyForm.value;
            const credentials = this.authService.getHashedCredentials();
      
          if (!credentials) {
            this.errorMessage = 'Failed to retrieve credentials.';
            return;
          }
      
          const payload = {
            ...formData,
            username: credentials.hashedUsername,
            password: credentials.hashedPassword,
          };
    
          const headers = { 'Content-Type': 'application/json' };
    
           this.http.post('https://bvproduct.app/api/profile-update.php', payload, { headers })
           .subscribe(response => {
            this.formSubmitted = true;
            this.errorMessage = null;
            console.log('Obrazac uspješno poslan', response);
           }, error => {
            this.formSubmitted = true;
            this.errorMessage = 'Došlo je do pogreške prilikom slanja obrasca. Pokušajte ponovno kasnije.';
            console.error('Greška kod slanja obrasca', error);
          });
        } else {
          this.formSubmitted = true;
          this.errorMessage = 'Molim vas da prije slanja ispravno ispunite sva polja.';
          console.warn('Obrasac nije ispravan');
          }
      }
    

  navHours() {
    this.currentPage = 'hours';
    this.cdr.detectChanges();
    this.router.navigateByUrl('/hours');
  }

  navLokacija() {
    this.router.navigateByUrl('/locations');
  }

  navProfil() {
    this.currentPage = 'profil';
    this.cdr.detectChanges();
    this.router.navigateByUrl('/profil');
  }

  navOdjava() {
    this.currentPage = 'home';
    this.cdr.detectChanges();
    this.router.navigateByUrl('/home');
  }

}
