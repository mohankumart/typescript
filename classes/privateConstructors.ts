class OnlyOne {
	private static instance: OnlyOne;

	private constructor(public name: string){}
	
	static getInstance(){
		if(!OnlyOne.instance){
			OnlyOne.instance = new OnlyOne('The only One');
		}
		return OnlyOne.instance;
	}
}

let right = OnlyOne.getInstance();

// let test = new OnlyOne('The only one'); Cannot use new here as constructor is private
