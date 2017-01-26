google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
var today = new Date();

function date(day, month, year)
{
  return new Date(year, month - 1, day);
}

function drawChart() {
  var container = document.getElementById('timeline-container');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn({ type: 'string', id: 'Module' })
  dataTable.addColumn({ type: 'string', id: 'Projet' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ '\0', 'Maintenant', new Date(today.getFullYear(), today.getMonth(), today.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate()) ],
    [ 'B2 - Unix System programming', 'Navy', date(30, 01, 2017), date(19, 02, 2017)],
    [ 'B2 - Unix System programming', 'Tetris', date(20, 02, 2017), date(19, 03, 2017)],
    [ 'B2 - French writing skills', '"Le mode d\'emploi : prendre le lecteur par la main"', date(30, 01, 2017), date(19, 02, 2017)],
    [ 'B2 - French writing skills', '"Faire préciser"', date(27, 02, 2017), date(12, 03, 2017)],
    [ 'B2 - French writing skills', '"La lettre de vente : informer, argumenter, valoriser"', date(20, 03, 2017), date(16, 04, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Corewar Championship', date(06, 02, 2017), date(26, 02, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Matchstick', date(13, 02, 2017), date(26, 02, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Corewar', date(27, 02, 2017), date(02, 04, 2017)],
    [ 'B2 - Elementary programming in C (Part I)', 'Rush', date(04, 03, 2017), date(05, 03, 2017)],
    [ 'B2 - Mathematics', '106bombyx', date(06, 02, 2017), date(19, 02, 2017)],
    [ 'B2 - Mathematics', '107transfer', date(20, 02, 2017), date(05, 03, 2017)],
    [ 'B2 - Mathematics', '108trigo', date(06, 03, 2017), date(19, 03, 2017)],
    [ 'B2 - Mathematics', '109titration', date(20, 03, 2017), date(02, 04, 2017)],
    [ 'B2 - Mathematics', '110borwein', date(03, 04, 2017), date(16, 04, 2017)],
    [ 'B2 - C Graphical Programming', 'Raytracer 1', date(06, 02, 2017), date(19, 03, 2017)],
    [ 'B2 - C Graphical Programming', 'Raytracer', date(20, 03, 2017), date(28, 05, 2017)],
    [ 'B2 - C Graphical Programming', 'TekAdventure', date(20, 03, 2017), date(28, 05, 2017)],
    [ 'B2 - C Graphical Programming', 'Rush - Scroller', date(23, 03, 2017), date(26, 03, 2017)],
    [ 'B2 - Introduction to System Administration', '"My Web" project', date(27, 02, 2017), date(26, 03, 2017)],
    [ 'B2 - Introduction to Networks', 'Rush #1', date(27, 02, 2017), date(12, 03, 2017)],
    [ 'B2 - Shell programming', 'MiniShell 2', date(13, 03, 2017), date(11, 04, 2017)],
    [ 'B2 - Shell programming', '42sh', date(10, 04, 2017), date(04, 06, 2017)],
    [ 'B2 - Elementary programming in C (Part II)', 'Lem-in', date(03, 04, 2017), date(30, 04, 2017)],
    [ 'B2 - Elementary programming in C (Part II)', 'Need4Stek', date(01, 05, 2017), date(04, 06, 2017)],
    [ 'B2 - Elementary programming in C (Part II)', 'Rush', date(20, 05, 2017), date(21, 05, 2017)],
  ]);


  chart.draw(dataTable);

  nowLine('timeline-container');

  google.visualization.events.addListener(chart, 'onmouseover', function(obj){
    if(obj.row == 0){
      $('.google-visualization-tooltip').css('display', 'none');
    }
    nowLine('timeline-container');
  })

  google.visualization.events.addListener(chart, 'onmouseout', function(obj){
    nowLine('timeline-container');
  })
}

function nowLine(div) {

    //get the height of the timeline div
    var height;
    $('#' + div + ' rect').each(function(index) {
        var x = parseFloat($(this).attr('x'));
        var y = parseFloat($(this).attr('y'));

        if (x == 0 && y == 0) {
            height = parseFloat($(this).attr('height'))
        }
    })

    var nowWord = $('#' + div + ' text:contains("Maintenant")');

    nowWord.prev().first().attr('height', height + 'px').attr('width', '1px').attr('y', '0');
    // add this line to remove the display:none style on the vertical line
    $('#' + div + '  text:contains("Maintenant")').each(function(idx, value) {
        if (idx == 0) {
            $(value).parent().find("rect").first().removeAttr("style");
        } else if (idx == 1) {
            $(value).parent().find("rect").first().attr("style", "display:none;");
        }

    });
}
