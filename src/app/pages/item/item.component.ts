import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/procduto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: String;

  constructor( private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit() {

    this.route.params
    .subscribe( parametros => {
      // console.log(parametros['id']);
      this.productosService.getProducto(parametros['id'])
      .subscribe( ( producto: ProductoDescripcion ) => {

        console.log(producto);
        this.id = parametros['id'];
        this.producto = producto;

      });
    });
  }
}
