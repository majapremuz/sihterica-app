"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9281],{9281:(O,f,l)=>{l.r(f),l.d(f,{ProfilPageModule:()=>x});var m=l(177),o=l(9417),c=l(4742),p=l(2931),v=l(467),e=l(4438),b=l(8880),j=l(1626),C=l(4796);const g=r=>({"active-nav":r});function _(r,d){if(1&r){const s=e.RV6();e.j41(0,"ion-datetime",29),e.bIt("ionChange",function(t){e.eBV(s);const i=e.XpG();return e.Njj(i.onDateChange(t,"datum_rodenja"))}),e.k0s()}if(2&r){const s=e.XpG();e.Y8G("firstDayOfWeek",1)("highlightedDates",s.highlightedDates)}}function M(r,d){1&r&&(e.j41(0,"div",30),e.EFF(1,"Podaci su uspje\u0161no poslani!"),e.k0s())}function k(r,d){if(1&r&&(e.j41(0,"div",31),e.EFF(1),e.k0s()),2&r){const s=e.XpG();e.R7$(),e.JRh(s.errorMessage)}}let h=(()=>{var r;class d{constructor(a,t,i,n,u){this.router=a,this.navCtrl=t,this.http=i,this.authService=n,this.cdr=u,this.currentPage="profil",this.selectedDateStart="",this.selectedDateEnd="",this.formattedDate1="",this.formattedDate2="",this.applyForm=new o.gE({ime:new o.MJ("",o.k0.required),prezime:new o.MJ("",o.k0.required),mobitel:new o.MJ("",o.k0.required),email:new o.MJ("",o.k0.required),adresa:new o.MJ("",o.k0.required),odje\u0107a:new o.MJ("",o.k0.required),obu\u0107a:new o.MJ("",o.k0.required),datum_rodenja:new o.MJ("",o.k0.required)}),this.formSubmitted=!1,this.errorMessage=null,this.highlightedDates=[{date:"2023-01-05",textColor:"#800080",backgroundColor:"#ffc0cb"},{date:"2023-01-10",textColor:"#09721b",backgroundColor:"#c8e5d0"},{date:"2023-01-20",textColor:"var(--ion-color-secondary-contrast)",backgroundColor:"var(--ion-color-secondary)"},{date:"2023-01-23",textColor:"rgb(68, 10, 184)",backgroundColor:"rgb(211, 200, 229)"}]}ngOnInit(){this.authService.isAuthenticated()?this.fetchUserData():this.router.navigate(["/home"])}onDateChange(a,t){const i=a.detail.value,n=new Date(i),u=String(n.getDate()).padStart(2,"0"),D=String(n.getMonth()+1).padStart(2,"0"),P=`${n.getFullYear()}-${D}-${u}`;"datum_rodenja"===t&&(this.selectedDateStart=i,this.formattedDate2=P,this.applyForm.patchValue({datum_rodenja:P}))}openPopover(a,t){const i=document.querySelector(`ion-popover[trigger="${t}"]`);i&&i.present({ev:a})}fetchUserData(){var a=this;return(0,v.A)(function*(){const t=a.authService.getHashedCredentials();if(!t)return a.errorMessage="Failed to retrieve credentials.",void a.router.navigate(["/home"]);const i={username:t.hashedUsername,password:t.hashedPassword};try{const n=yield a.http.post("https://bvproduct.app/api/profile.php",i).toPromise();console.log(n),n&&Array.isArray(n)&&n.length>0&&"Success"===n[0].response?(console.log(n),a.applyForm.patchValue({ime:n[0].name,prezime:n[0].surname,mobitel:n[0].phone,email:n[0].email,adresa:n[0].address,odje\u0107a:n[0].clothes_size,obu\u0107a:n[0].footwear_size,datum_rodenja:n[0].date_of_birth})):(a.errorMessage="Failed to fetch user data. API returned an unexpected response.",console.error("Failed to fetch user data",n))}catch(n){a.errorMessage="An error occurred while fetching user data. Please try again later.",console.error("Error fetching user data",n)}})()}unosProfila(){if(this.applyForm.valid){const a=this.applyForm.value,t=this.authService.getHashedCredentials();if(!t)return void(this.errorMessage="Failed to retrieve credentials.");const i={...a,username:t.hashedUsername,password:t.hashedPassword};this.http.post("https://bvproduct.app/api/profile-update.php",i,{headers:{"Content-Type":"application/json"}}).subscribe(u=>{this.formSubmitted=!0,this.errorMessage=null,console.log("Obrazac uspje\u0161no poslan",u)},u=>{this.formSubmitted=!0,this.errorMessage="Do\u0161lo je do pogre\u0161ke prilikom slanja obrasca. Poku\u0161ajte ponovno kasnije.",console.error("Gre\u0161ka kod slanja obrasca",u)})}else this.formSubmitted=!0,this.errorMessage="Molim vas da prije slanja ispravno ispunite sva polja.",console.warn("Obrasac nije ispravan")}navHours(){this.currentPage="hours",this.cdr.detectChanges(),this.router.navigateByUrl("/hours")}navLokacija(){this.router.navigateByUrl("/locations")}navProfil(){this.currentPage="profil",this.cdr.detectChanges(),this.router.navigateByUrl("/profil")}navOdjava(){this.currentPage="home",this.cdr.detectChanges(),this.router.navigateByUrl("/home")}}return(r=d).\u0275fac=function(a){return new(a||r)(e.rXU(p.Ix),e.rXU(b.q9),e.rXU(j.Qq),e.rXU(C.u),e.rXU(e.gRc))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-profil"]],standalone:!0,features:[e.aNF],decls:49,vars:17,consts:[[3,"ionViewWillEnter","fullscreen"],[3,"ngSubmit","formGroup"],["src","assets/title image.png","alt","title image",1,"title-img"],["for","ime"],["type","text","id","ime","formControlName","ime"],["for","prezime"],["type","text","id","prezime","formControlName","prezime"],["for","Mobitel"],["type","text","id","mobitel","formControlName","mobitel"],["for","E-mail"],["type","text","id","email","formControlName","email"],["for","adresa"],["type","text","id","adresa","formControlName","adresa"],["for","odje\u0107a"],["type","text","id","odje\u0107a","formControlName","odje\u0107a"],["for","obu\u0107a"],["type","text","id","obu\u0107a","formControlName","obu\u0107a"],["position","stacked"],["id","datum_rodenja","readonly","","required","","formControlName","datum_rodenja",3,"click","value"],["trigger","datum_rodenja"],["type","submit"],["class","formSend sucess",4,"ngIf"],["class","formSend error",4,"ngIf"],[1,"space"],[3,"click","ngClass"],["src","assets/hours_icon.png","alt","hours icon"],["src","assets/location.png","alt","location icon"],["src","assets/profil_icon.png","alt","profil icon"],["src","assets/odjava_icon.png","alt","odjava icon"],["presentation","date","locale","hr-HR",3,"ionChange","firstDayOfWeek","highlightedDates"],[1,"formSend","sucess"],[1,"formSend","error"]],template:function(a,t){1&a&&(e.j41(0,"ion-content",0),e.bIt("ionViewWillEnter",function(){return t.fetchUserData()}),e.j41(1,"form",1),e.bIt("ngSubmit",function(){return t.unosProfila()}),e.nrm(2,"img",2),e.j41(3,"h1"),e.EFF(4,"Moji podaci"),e.k0s(),e.j41(5,"label",3),e.EFF(6,"Ime:"),e.k0s(),e.nrm(7,"input",4),e.j41(8,"label",5),e.EFF(9,"Prezime:"),e.k0s(),e.nrm(10,"input",6),e.j41(11,"label",7),e.EFF(12,"Mobitel:"),e.k0s(),e.nrm(13,"input",8),e.j41(14,"label",9),e.EFF(15,"E-mail:"),e.k0s(),e.nrm(16,"input",10),e.j41(17,"label",11),e.EFF(18,"Adresa:"),e.k0s(),e.nrm(19,"input",12),e.j41(20,"label",13),e.EFF(21,"Veli\u010dina odje\u0107e:"),e.k0s(),e.nrm(22,"input",14),e.j41(23,"label",15),e.EFF(24,"Veli\u010dina obu\u0107e:"),e.k0s(),e.nrm(25,"input",16),e.j41(26,"ion-item")(27,"ion-label",17)(28,"p"),e.EFF(29,"Datum ro\u0111enja: "),e.k0s(),e.nrm(30,"br"),e.k0s(),e.j41(31,"ion-input",18),e.bIt("click",function(n){return t.openPopover(n,"popover2")}),e.k0s(),e.j41(32,"ion-popover",19),e.DNE(33,_,1,2,"ng-template"),e.k0s()(),e.nrm(34,"br"),e.j41(35,"button",20),e.EFF(36,"Potvrda podataka"),e.k0s()(),e.DNE(37,M,2,0,"div",21)(38,k,2,1,"div",22),e.nrm(39,"div",23),e.j41(40,"nav")(41,"a",24),e.bIt("click",function(){return t.navHours()}),e.nrm(42,"img",25),e.k0s(),e.j41(43,"a",24),e.bIt("click",function(){return t.navLokacija()}),e.nrm(44,"img",26),e.k0s(),e.j41(45,"a",24),e.bIt("click",function(){return t.navProfil()}),e.nrm(46,"img",27),e.k0s(),e.j41(47,"a",24),e.bIt("click",function(){return t.navOdjava()}),e.nrm(48,"img",28),e.k0s()()()),2&a&&(e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("formGroup",t.applyForm),e.R7$(30),e.Y8G("value",t.formattedDate2),e.R7$(6),e.Y8G("ngIf",t.formSubmitted&&!t.errorMessage),e.R7$(),e.Y8G("ngIf",t.errorMessage),e.R7$(3),e.Y8G("ngClass",e.eq3(9,g,"hours"===t.currentPage)),e.R7$(2),e.Y8G("ngClass",e.eq3(11,g,"locations"===t.currentPage)),e.R7$(2),e.Y8G("ngClass",e.eq3(13,g,"profil"===t.currentPage)),e.R7$(2),e.Y8G("ngClass",e.eq3(15,g,"odjava"===t.currentPage)))},dependencies:[c.bv,c.W9,c.A9,c.$w,c.uz,c.he,c.CF,c.Je,c.Gw,m.MD,m.YU,m.bT,o.YN,o.qT,o.me,o.BC,o.cb,o.YS,o.X1,o.j4,o.JD],styles:["ion-content[_ngcontent-%COMP%]{--background: #fff;font-family:Poppins,sans-serif;line-height:1.42857143}img[_ngcontent-%COMP%]{display:block;max-width:100%;height:auto;margin-top:1em;padding:0 1rem}form[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;padding-left:1rem;position:relative}h1[_ngcontent-%COMP%]{line-height:1.1;font-size:1.875rem;text-align:left;font-weight:500}label[_ngcontent-%COMP%]{margin:-2px;font-size:.875rem;padding-top:.5rem}input[_ngcontent-%COMP%]{width:97%;background-color:#fff;box-shadow:inset 0 1px 1px #00000013;margin:0;padding:.2em;border-radius:5px;z-index:10;position:relative}.sc-ion-input-md-h[_ngcontent-%COMP%]{background-color:#fff;box-shadow:inset 0 1px 1px #000000ea;position:relative;border-radius:5px;min-height:37px;z-index:10;text-indent:1rem;border:1px solid rgb(230,225,225)}ion-item[_ngcontent-%COMP%]{width:105%;z-index:5;position:relative;right:1rem}ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-size:1.2rem;text-indent:.2rem}ion-datetime[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}#datum_rodenja[_ngcontent-%COMP%]{text-indent:3px}button[_ngcontent-%COMP%], .formSend[_ngcontent-%COMP%]{background-color:#fb7426;color:#fff;width:103%;padding:1.2em 0;text-align:center;border:none;border-radius:5px;font-weight:700;font-size:1.2em;position:relative;right:1rem;margin:2rem 0}.formSend[_ngcontent-%COMP%]{margin-left:.5rem;font-size:1rem}.formSend.success[_ngcontent-%COMP%]{background-color:#009300}.formSend.error[_ngcontent-%COMP%]{background-color:red}nav[_ngcontent-%COMP%]{width:100%;height:15vmin;background-color:#000;color:#fff;font-weight:900;display:flex;justify-content:center;align-items:center;padding-top:.5rem;position:fixed;bottom:0;box-shadow:0 3px 17px #000000bf}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:9vmin;margin:1rem;filter:invert(100%) sepia(4%) saturate(6%) hue-rotate(211deg) brightness(104%) contrast(100%)}.active-nav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-bottom:5px solid #000000}.space[_ngcontent-%COMP%]{height:30vmin}"]}),d})();const y=[{path:"",component:h}];let F=(()=>{var r;class d{}return(r=d).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[p.iI.forChild(y),p.iI]}),d})(),x=(()=>{var r;class d{}return(r=d).\u0275fac=function(a){return new(a||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[m.MD,o.YN,c.bv,F,h]}),d})()}}]);