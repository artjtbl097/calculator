var op="", op1="", optr, c=0, a, b;

function dispFunc(value) {
    var x = document.getElementById(value).value;
    console.log(x);
    
    switch(x){
    	case"1": op=op+x;
    			 break;
    	case"2": op = op+x;
    			 break;
    	case"3": op = op+x;
    			 break;
    	case"4": op = op+x;
    			 break;
    	case"5": op = op+x;
    			 break;
    	case"6": op = op+x;
    			 break;
    	case"7": op = op+x;
    			 break;
    	case"8": op = op+x;
    			 break;
    	case"9": op = op+x;
    			 break;
    	case"0": op = op+x;
    			 break;
    	case".": op = op+x;
    	         break;
    	case'+': op1=op;
    			 op=" ";
    			 optr=x;
    			 break;
     	case'-': op1=op;
    			 op=" ";
    			 optr=x;
    			 break;
    	case'*': op1=op;
    			 op=" ";
    			 optr=x;
    			 break;
    	case'/': op1=op;
    			 op=" ";
    			 optr=x;
    			 break;
	}
    document.getElementById("result").innerHTML = op;
    
 }
function calcFunc()
{
	if(c==0)
	{
 		a = parseFloat(op1);
 		b = parseFloat(op);	
	}
	else
	{
 		a=c;
 		b=parseFloat(op);
 	}
 		switch(optr){
 			case '+': c = eval(a + optr + b);
 				  document.getElementById("result").innerHTML = a+" + "+b+" = "+c;//contcatenation
 				  break;
 			case '-': c = eval(a + optr + b);
 				  document.getElementById("result").innerHTML = a+" - "+b+" = "+c;
 				  break;
  			case '*': c = eval(a + optr + b);
 				  document.getElementById("result").innerHTML = a+" * "+b+" = "+c;
 				  break;
  			case '/': c = eval(a + optr + b);
 				  document.getElementById("result").innerHTML = a+" / "+b+" = "+c;
 				  break;
 		}
}

