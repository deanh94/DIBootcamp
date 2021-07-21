class Video {
    constructor(title,uploader,time){
    this.title= title;
    this.uploader= uploader;
    this.time= time;
    }
    watch(){
    console.log(`${this.uploader}, watched all ${this.time} of ${this.title}`);
    }
}
    const clip= new Video("Monster truck racing", "Mikey","10:00");
    const short= new Video("How to make spaghetti", "Sally","7:30");
    clip.watch();