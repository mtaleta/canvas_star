import React, { Component } from 'react';
import Canvas from '../components/canvas';
class Home extends Component { 
  componentDidMount() {
    var cx = document.getElementById('canvas');
    var ctx = cx.getContext('2d');
    var St = new Canvas(cx, ctx);
    St.step();
    window.onresize = function () {
      St.cx.width = St.cx.clientWidth;
      St.cx.height = St.cx.clientHeight;
      if (St.dots.length == 0) {
        St.construct();
      }
      St.render();
    };
    console.log(cx.offsetTop)
    cx.onmousemove = function (e) {
      St.mousePos[0] = e.clientX - cx.offsetLeft;
      St.mousePos[1] = e.clientY - 64;
    }
    window.onresize();
  }
  render() {
    return (
      <div className='home'>
        <div className='canvasbg'>
            <canvas id='canvas'></canvas>
        </div>
      </div>
    )
  }
}

module.exports = Home 