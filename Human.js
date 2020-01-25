class Human {
    name;
    job ; 
   skills =[] ;
    getJob(job){
        this.job= job;  
        console.log(this.job)      

    };

    leaveJob(){
        this.job="unemployed"
        console.log(this.job)
    };
    
    learnNewSkill(skill){
this.skills.push(skill)
console.log(this.skills)
    };
    
    forgetSkill(skill){
this.skills.pop(skill)
console.log(this.skills)

    };
}
class Student extends Human {

// eslint-disable-next-line no-useless-constructor
constructor(){
    super();
    
}
}
const me = new Student() ;
me.getJob("Web Developer");
me.learnNewSkill("React");
me.learnNewSkill("Angular");

me.forgetSkill("React");
 me.leaveJob();

