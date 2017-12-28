import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  email:string,
  phone:string,
  sex:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
 
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if(type == "asc"){
      this.users.sort(function(a,b){
        return a.id - b.id;
      });
    }else if(type == "desc"){
      this.users.sort(function(a,b){
        return b.id - a.id;
      });
    }else{
      this.users.sort(function(a,b){
        return Math.random()*10 - Math.random()*10;
      });

    }
    console.log("sortUsers Works!");
  }
  loadUsersData(){
    this.users = [
      {id:1,name:"Ryane",email:"Ryane@accenture.com",phone:"18645678901",sex:"male"},
      {id:2,name:"Jerry",email:"Jerry@accenture.com",phone:"186334378901",sex:"male"},
      {id:3,name:"Bob",email:"Bob@accenture.com",phone:"186478078901",sex:"female"},
      {id:4,name:"William",email:"William@accenture.com",phone:"18687978901",sex:"female"},
      {id:5,name:"Frank",email:"Frank@accenture.com",phone:"18641788901",sex:"female"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"Jack",
      email:"Jack@accenture.com",
      phone:"136546789012",
      sex:"male"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
