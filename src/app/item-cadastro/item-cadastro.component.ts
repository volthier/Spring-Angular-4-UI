import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ItemService } from 'app/item/item.service';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];
 //   {etiqueta:'AB1203', descricao: 'Coisa 1', dataAquisicao: new Date()},
//    {etiqueta:'AB1223', descricao: 'Coisa 2', dataAquisicao: new Date()}

  
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.itemService.listar()
      .subscribe(dados => this.itens = dados);
  }

  adicionar(frm: FormControl){
    console.log(frm.value);

    this.itemService.adicionar(frm.value)
    .subscribe(() =>{
      frm.reset();
    this.consultar();
  });
  }

}
