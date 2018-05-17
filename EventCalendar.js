function setStyle(id,style,value)
{
    id.style[style] = value;
}
function opacity(el,opacity)
{
        setStyle(el,"filter:","alpha(opacity="+opacity+")");
        setStyle(el,"-moz-opacity",opacity/100);
        setStyle(el,"-khtml-opacity",opacity/100);
        setStyle(el,"opacity",opacity/100);
}
function calendar()
{
        var date = new Date();
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getYear();
        if(year<=200)
        {
                year += 1900;
        }
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
        days_in_month = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
        if(year%4 == 0 && year!=1900)
        {
                days_in_month[1]=29;
        }
        total = days_in_month[month];
        var date_today = day+' '+months[month]+' '+year;

        beg_j = date;
        beg_j.setDate(1);
        if(beg_j.getDate()==2)
        {
                beg_j=setDate(0);
        }
        beg_j = beg_j.getDay();
        
        document.write('<div class="month"><ul><li class="prev">&#10094;</li><li class="next">&#10095;</li><li>' + months[month] + 
            '<br><span style="font-size:18px">' + year + '</span></li></ul></div>');
        document.write('<ul class="weekdays"><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></ul>');
        document.write('<ul class="days">');
        week = 0;
        for(i=1;i<=beg_j-1;i++)
        {
                document.write('<li></li>');
                week++;
        }
        for(i=1;i<=total;i++)
        {
                if(week==0)
                {
                }
                if(day==i)
                {
                        document.write('<li><span class="active">'+i+'</span></li>');
                }
                else
                {
                        document.write('<li>'+i+'</li>');
                }
                week++;
                if(week==7)
                {
                        week=0;
                }
        }
        document.write('</ul>');
        return true;
}