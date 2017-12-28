import { Component, OnInit } from '@angular/core';

interface Org{
  id:number,
  name:string,
  mgr:string,
  description:string
  
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  orgs:Array<Org>;
  constructor() {
    this.loadOrgsData();
  }
 
  sortOrgs(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if(type == "asc"){
      this.orgs.sort(function(a,b){
        return a.id - b.id;
      });
    }else if(type == "desc"){
      this.orgs.sort(function(a,b){
        return b.id - a.id;
      });
    }else{
      this.orgs.sort(function(a,b){
        return Math.random()*10 - Math.random()*10;
      });

    }
    console.log("sorgOrgs Works!");
  }
  loadOrgsData(){
    this.orgs = [
      {id:1,name:"CMT",mgr:"Wang Bob",description:"Communication and Media Technology Industry"},
      {id:2,name:"FS",mgr:"Yan Jerry",description:"Financials Industry"},
      {id:3,name:"PRD",mgr:"Ding William",description:"Production Industry"},
      {id:4,name:"HPS",mgr:"William@accenture.com",description:"Health and Public Service Industry"},
      {id:5,name:"RES",mgr:"Hu Peter",description:"Resource Industry"}
    ];
  }
  addNewOrg(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newOrg:Org = {
      id:Number(uuid),
      name:"SAP",
      mgr:"Huang, Jack",
      description:"Communication and Media Technology"
    }
    this.orgs.push(newOrg);
  }
  deleteOrgByID(id){
    this.orgs.forEach((org,index,arr)=>{
      if(org.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
