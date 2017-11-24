"use strict";
//Object.defineProperty  自动存档
function Archiver(){
    var temperature = null;
    var archiver = [];
    Object.defineProperty(this,"temperature",{
        get:function(){
            return temperature;
        },
        set:function(val){
            temperature = val;
            archiver.push(temperature)
        }
    })
    this.getArchiver = function(){
        console.log(archiver);
    }
}
var arch = new Archiver();
arch.temperature = "a",
arch.getArchiver();
arch.temperature = "b";
arch.temperature ="c";
arch.getArchiver();
