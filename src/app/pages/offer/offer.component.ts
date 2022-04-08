import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*this is for reference who we can add value/property manually not via api only static value via compoenent*/ 
  /*use all cards text properties here and bind these properties with the help of data binding and interpolation in html*/
  
  /*plan title personal*/ 
  planPersonalTitle:any="Personal";
  planPersonalCurrency:any="$";
  planPersonalPrice:any="99";
  planPersonalTime:any="/ monthly";
  planPersonalDescription:any="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe eveniet similique modi sed, iusto in assumenda inventore omnis facere nisi provident enim officiis quis aspernatur porro dolores adipisci repellendus!";
  planPersonalGetStartedBtn:any="Get Started";

   /*plan title teams*/ 
   planTeamsTitle:any="Teams";
   planTeamsCurrency:any="$";
   planTeamsPrice:any="199";
   planTeamsTime:any="/ monthly";
   planTeamsDescription:any="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe eveniet similique modi sed, iusto in assumenda inventore omnis facere nisi provident enim officiis quis aspernatur porro dolores adipisci repellendus!";
   planTeamsGetStartedBtn:any="Get Started";

    /*plan title corporate*/ 
    planCorporateTitle:any="Corporate";
    planCorporateCurrency:any="$";
    planCorporatePrice:any="300";
    planCorporateTime:any="/ monthly";
    planCorporateDescription:any="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe eveniet similique modi sed, iusto in assumenda inventore omnis facere nisi provident enim officiis quis aspernatur porro dolores adipisci repellendus!";
    planCorporateGetStartedBtn:any="Get Started";

    /*plan title company*/ 
    planCompanyTitle:any="Company";
    planCompanyCurrency:any="$";
    planCompanyPrice:any="999";
    planCompanyTime:any="/ monthly";
    planCompanyDescription:any="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam saepe eveniet similique modi sed, iusto in assumenda inventore omnis facere nisi provident enim officiis quis aspernatur porro dolores adipisci repellendus!";
    planCompanyGetStartedBtn:any="Get Started";

}
