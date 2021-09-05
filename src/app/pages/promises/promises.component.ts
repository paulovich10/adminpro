import { createSkipSelf } from '@angular/compiler/src/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  usuarios: any[];
  constructor() { }

  ngOnInit(): void {
    this.getUsuarios();
    // const promesa = new Promise((resolve, reject) => {
    //   resolve('hola mundo')
    // })
    // promesa.then((mensaje) => {
    //   console.log(mensaje)
    // })
    //   .catch(err => {

    //   })
  }
  getUsuarios() {
    fetch('https://reqres.in/api/users')
      .then(resp => {
        resp.json().then(body => {
          this.usuarios = body.data
        })
      })
  }


}
