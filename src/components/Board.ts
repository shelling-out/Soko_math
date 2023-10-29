class Board{
    public state:string[][] ;
    public n:number ;
    constructor( initialState:string[][] ){
        this.state = initialState;
        this.n = initialState.length;
        
    }
    public Occupied(str:string){
        console.log('occupied') ;
        for(let i =1 ;i < 10;i++){
            if(str.includes(`${i}`)){
                return true; 
            }
        }
        if(str.includes('>') || str.includes('<') || str.includes('#') || str.includes('-') || str.includes('+') || str.includes('='))
            return true;
        return false ;
    }
    public checkAbilityToMove(x:number , y:number , dir:string ){
        
        switch(dir){
            case 'R':
                return y+1 < this.n &&  !this.Occupied(this.state[x][y+1])
            case 'L':
                return y-1 >=0 && !this.Occupied(this.state[x][y-1])
            case 'D':
                return x+1 < this.n && !this.Occupied(this.state[x+1][y]) ; 
            case 'U':
                return x-1 >=0 && !this.Occupied(this.state[x-1][y]) ;
        }
    }
    public move(x:number ,  y:number , dir:string ){
        if(this.state[x][y] == '#' || this.state[x][y].includes('&') || this.state[x][y] == '$' || this.state[x][y] == '.' )
            return; 

        let initalValue = this.state[x][y][0];
        
        this.state[x][y] = this.state[x][y].includes('$') ? '$' : '.' ;
        
        while(this.checkAbilityToMove(x , y , dir )){
            console.log('move' ,x,y);
            switch(dir){
                case 'R':
                    y++;
                    break;
                case 'L':
                    y--;
                    break;
                case 'D':
                    x++;
                    break;
                case 'U':
                    x--;
                    break;
            }
        }
        if(this.state[x][y].includes('$')){
            this.state[x][y] = `${initalValue}$`;
        }
        else{
            this.state[x][y] = initalValue ;
        }
        return [x,y] ;
    }

}


export default Board ;