import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.scss']
})
export class LiteratureComponent implements OnInit {
  steelgauchart = false
  gaugechart =false;
  standardchem = false;
  mechanprop = false;
  reqmechanicalpro =false;
  osionchart =false;
  weightconv = false;
  metricconver= false;

  constructor() { }

  ngOnInit() {

    this.showsteelgauchart();
  }

  showsteelgauchart(){
    this.steelgauchart = true
    this.gaugechart =false;
    this.standardchem = false;
    this.mechanprop = false;
    this.reqmechanicalpro =false;
    this.osionchart =false;
    this.weightconv = false;
    this.metricconver= false;
  }
  showgauchart(){
    this.steelgauchart = false
    this.gaugechart =true;
    this.standardchem = false;
    this.mechanprop = false;
    this.reqmechanicalpro =false;
    this.osionchart =false;
    this.weightconv = false;
    this.metricconver= false;
  }
  showstandardchem(){
    this.steelgauchart = false
    this.gaugechart =false;
    this.standardchem = true;
    this.mechanprop = false;
    this.reqmechanicalpro =false;
    this.osionchart =false;
    this.weightconv = false;
    this.metricconver= false;
  }
  showmechanprop(){
    this.steelgauchart = false
    this.gaugechart =false;
    this.standardchem = false;
    this.mechanprop = true;
    this.reqmechanicalpro =false;
    this.osionchart =false;
    this.weightconv = false;
    this.metricconver= false;
  }
  showreqmechanicalpro(){
    this.steelgauchart = false
    this.gaugechart =false;
    this.standardchem = false;
    this.mechanprop = false;
    this.reqmechanicalpro =true;
    this.osionchart =false;
    this.weightconv = false;
    this.metricconver= false;
  }
  showosionchart(){
    this.steelgauchart = false
    this.gaugechart =false;
    this.standardchem = false;
    this.mechanprop = false;
    this.reqmechanicalpro =false;
    this.osionchart =true;
    this.weightconv = false;
    this.metricconver= false;
  }
  showweightconv(){
    this.steelgauchart = false
    this.gaugechart =false;
    this.standardchem = false;
    this.mechanprop = false;
    this.reqmechanicalpro =false;
    this.osionchart =false;
    this.weightconv = true;
    this.metricconver= false;
  }
  showmetricconver(){
    this.steelgauchart = false
    this.gaugechart =false;
    this.standardchem = false;
    this.mechanprop = false;
    this.reqmechanicalpro =false;
    this.osionchart =false;
    this.weightconv = false;
    this.metricconver= true;
  }
  

}
