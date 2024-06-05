import { HealthObjective } from "./healthobjective"

export class Monitoring {
    idMonitoring:number=0
    starDateMonitoring:Date=new Date(0,0,0)
    endDateMonitoring:Date=new Date(0,0,0)
    statusMonitoring:string=''
    historyMonitoring:string=''
    nutritionalPlanMonitoring:string=''
    healthObjective:HealthObjective=new HealthObjective()
}