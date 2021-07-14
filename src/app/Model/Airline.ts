export class Airline{
    airlineName?:string;
    uploadLogo?:string;
    flightNumber?:number;
    fromPlace?:string;
    toPlace?:string;
    startdatetime?:string;
    enddatetime?:string;
    scheduleddays?:string;
    instrumentUsed?:string;
    tNoBusinessClassSeats?:number;
    tNoNonBusinessClassSeats?:number;
    ticketCost?: number;
    numberofRows?:number;
    meal?:string;
   

    constructor(public AirlineName?:string, 
        public UploadLogo?:string, 
        public FlightNumber?:number,
        public ContactAddress?:string,
        public FromPlace?:string,
        public ToPlace?:string,
        public StartDateTime?:string,
        public EndDateTime?:string,
        public ScheduledDays?:string,
        public InstrumentUsed?:string,
        public TNoBusinessClassSeats?:number,
        public TNoNonBusinessClassSeats?:number,
        public TicketCost?:number,
        public NumberOfRows?:number,
        public Meal?:string){
        this.airlineName=AirlineName;
        this.uploadLogo=UploadLogo;
        this.flightNumber=FlightNumber;
        this.fromPlace=FromPlace;
        this.toPlace=ToPlace;
        this.startdatetime=StartDateTime;
        this.enddatetime=EndDateTime;
        this.scheduleddays=ScheduledDays;
        this.instrumentUsed=InstrumentUsed;
        this.tNoBusinessClassSeats=TNoBusinessClassSeats;
        this.tNoNonBusinessClassSeats=TNoNonBusinessClassSeats;
        this.ticketCost=TicketCost;
        this.numberofRows=NumberOfRows;
        this.meal=Meal;

    }
}