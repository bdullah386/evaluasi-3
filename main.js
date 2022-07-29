for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x == 5|| x == y){
            document.write(" ",2 * y - 1 +" ")
        }else if(y == 5|| x + y == 10){
            document.write(" ",2 * x - 2 +" ")
        }else{
            document.write(" ~ ")
        }
    }
    document.write("<br>")
}

document.write("<br>")


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x <= y){
            document.write(" ",2 * x - 1 +" ")
        }else {
            document.write(" ~ ")
        }
    }
    document.write("<br>")
}

document.write("<br>")


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x + y >= 10){
            document.write(" ",18 - 2 * y +" ")
        }else {
            document.write(" ~ ")
        }
    }
    document.write("<br>")
}

document.write("<br>")


for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x == y){
            document.write(" ",2 * x - 1 +" ")
        }else if (x + y == 10){
            document.write(" ",2 * x -2 +" ")
        }else if(x <= y && x + y >= 10){
            document.write(" B ")
        }else if(x >= y && x + y <= 10){
            document.write(" A ")
        }else{
            document.write(" ~ ")
        }
    }
    document.write("<br>")
}

document.write("<br>")

for(let y = 1; y <10; y++){
    for(let x = 1; x <10; x++){
        if(x == y){
            document.write(" ",2 * x - 1 +" ")
        }else if (x + y == 10){
            document.write(" ",2 * x -2 +" ")
        }else if(x > y && x + y > 10){
            document.write(" B ")
        }else if(x + y < 10 && x < y){
            document.write(" A ")
        }else{
            document.write(" ~ ")
        }
    }
    document.write("<br>")
}

document.write("<br>")