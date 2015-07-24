function b1vChartPlotter(e) {
  var ctx = e.drawingContext;
  var points = e.points;
  var y_bottom = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[0], 1);  // see     http://dygraphs.com/jsdoc/symbols/Dygraph.html#toDomYCoord
  var y_top = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[1], 1);
  var x_range = e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[1])-e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[0]);

  // This should really be based on the minimum gap
  var bar_width = 1/2 * (points[1].canvasx - points[0].canvasx);
  
  for (var j = 1; j < points.length; j++) {
    bar_width= Math.min(bar_width, 1/2 * (points[j].canvasx - points[j-1].canvasx));
    if (bar_width<x_range/500) {bar_width=x_range/500; break;}
  }
  
  ctx.fillStyle = e.color;
  ctx.globalAlpha=0.15;

  // Do the actual plotting.
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var center_x = p.canvasx;  // center of the bar

    ctx.fillRect(center_x, p.canvasy, bar_width/2, y_bottom - p.canvasy);
    ctx.strokeRect(center_x, p.canvasy, bar_width/2, y_bottom - p.canvasy);
  }
}

function a1vChartPlotter(e) {
  var ctx = e.drawingContext;
  var points = e.points;
  var y_bottom = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[0], 1);  // see     http://dygraphs.com/jsdoc/symbols/Dygraph.html#toDomYCoord
  var y_top = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[1], 1);
  var x_range = e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[1])-e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[0]);
  
  // This should really be based on the minimum gap
  var bar_width = 1/2 * (points[1].canvasx - points[0].canvasx);
  for (var j = 1; j < points.length; j++) {
    bar_width= Math.min(bar_width, 1/2 * (points[j].canvasx - points[j-1].canvasx));
    if (bar_width<x_range/500) {bar_width=x_range/500; break;}
  }
  ctx.fillStyle = e.color;
  ctx.globalAlpha=0.15;

  // Do the actual plotting.
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var center_x = p.canvasx;  // center of the bar

    ctx.fillRect(center_x, y_top, bar_width/2, y_bottom - p.canvasy);
    ctx.strokeRect(center_x, y_top, bar_width/2, y_bottom - p.canvasy);
  }
}

function SVChartPlotter(e) {
  var ctx = e.drawingContext;
  var points = e.points;
  var y_bottom = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[0], 1);  // see     http://dygraphs.com/jsdoc/symbols/Dygraph.html#toDomYCoord
  var y_top = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[1], 1);
  var x_range = e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[1])-e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[0]);

  // This should really be based on the minimum gap
  var bar_width = 1/2 * (points[1].canvasx - points[0].canvasx);
  for (var j = 1; j < points.length; j++) {
    bar_width= Math.min(bar_width, 1/2 * (points[j].canvasx - points[j-1].canvasx));
    if (bar_width<x_range/500) {bar_width=x_range/500; break;}
  }
  ctx.fillStyle = e.color;
  ctx.globalAlpha=0.7;

  // Do the actual plotting.
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var center_x = p.canvasx;  // center of the bar

    ctx.fillRect(center_x - bar_width / 2, p.canvasy, bar_width/2, y_bottom - p.canvasy);
    ctx.strokeRect(center_x - bar_width / 2, p.canvasy, bar_width/2, y_bottom - p.canvasy);
  }
}

function BVChartPlotter(e) {
  var ctx = e.drawingContext;
  var points = e.points;
  var y_bottom = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[0], 1);  // see     http://dygraphs.com/jsdoc/symbols/Dygraph.html#toDomYCoord
  var y_top = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[1], 1);
  var x_range = e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[1])-e.dygraph.toDomXCoord(e.dygraph.xAxisRange()[0]);

  // This should really be based on the minimum gap
  var bar_width = 1/2 * (points[1].canvasx - points[0].canvasx);
  for (var j = 1; j < points.length; j++) {
    bar_width= Math.min(bar_width, 1/2 * (points[j].canvasx - points[j-1].canvasx));
    if (bar_width<x_range/500) {bar_width=x_range/500; break;}
  }
  ctx.fillStyle = e.color;
  ctx.globalAlpha=0.7;

  // Do the actual plotting.
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var center_x = p.canvasx;  // center of the bar

    ctx.fillRect(center_x - bar_width / 2, y_top, bar_width/2, y_bottom - p.canvasy);
    ctx.strokeRect(center_x - bar_width / 2, y_top, bar_width/2, y_bottom - p.canvasy);
  }
}


function PosChartPlotter(e) {
  var ctx = e.drawingContext;
  var points = e.points;
  var y_bottom = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[0], 1);  // see     http://dygraphs.com/jsdoc/symbols/Dygraph.html#toDomYCoord
  var y_top = e.dygraph.toDomYCoord(e.dygraph.yAxisRange(1)[1], 1);
  var y_height  = y_top - y_bottom;
  var y_data_range = e.dygraph.yAxisRange(1)[1]-e.dygraph.yAxisRange(1)[0];

  // This should really be based on the minimum gap
  var bar_width = 1/2 * (points[1].canvasx - points[0].canvasx);
  ctx.globalAlpha=0.7;
  var old_pos = 0;
  var from_bottom;
  var old_y; 
  var new_y;
  var buf;
  var scale_factor=0.25;
  

  // Do the actual plotting.
  for (var i = 0; i < points.length; i++) {
    var p = points[i];
    var center_x = p.canvasx;  // center of the bar
    
    
    if (p.yval===null || isNaN(p.yval)) continue;
    
    //set style
    if (p.yval>old_pos) {
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
      buf=0.02;
    }
    else {
      ctx.fillStyle = "red";
      ctx.strokeStyle = "red";
      buf=-0.02;
    }
    //ctx.fillStyle = "red";
    //if (i===276) alert(ctx);
    
    //cal pos
    from_bottom = (old_pos===0?(p.yval>0):(old_pos>0));
    if (from_bottom) {
      old_y = y_bottom+y_height/y_data_range*(old_pos+buf)*scale_factor;
      new_y = y_bottom+y_height/y_data_range*(p.yval-buf)*scale_factor;
    }
    else {
      old_y = y_top+y_height/y_data_range*(old_pos+buf)*scale_factor;
      new_y = y_top+y_height/y_data_range*(p.yval-buf)*scale_factor;  
    }
    //if (i===276) alert(new_y+" "+old_y+" "+y_top+" "+y_bottom+" "+old_pos+" "+JSON.stringify(p)+" "+y_data_range);

    
    //real draw
    ctx.fillRect(center_x - bar_width / 4, old_y, bar_width/2, new_y - old_y);
    ctx.strokeRect(center_x - bar_width / 4, old_y, bar_width/2, new_y - old_y);
    //ctx.fillRect(center_x - bar_width / 4, y_top, bar_width/2, -y_height/10);
    //ctx.strokeRect(center_x - bar_width / 4, y_top, bar_width/2, -y_height/10);
    
    //record old_pos
    old_pos = p.yval;
    
  }
}
