function ticketPrice(ticketQuantity)
{
    const firstHundradRate=100;
    const secondHundradRate=90;
    const restRate=70;
    if(ticketQuantity<=100)
    {
       const perTicketPrice=firstHundradRate*ticketQuantity;
       return perTicketPrice;
    }
    else if (ticketQuantity<=200)
    {
        const firstHundradPerson=100;
        const firstHundradTicketPrice=firstHundradPerson*firstHundradRate;
        const restTicketQuantity=ticketQuantity-firstHundradPerson;
        const restTicketPrice=restTicketQuantity*secondHundradRate;
        const totalTwoHundradPrice=firstHundradTicketPrice+restTicketPrice;
        return totalTwoHundradPrice

    }
    else
    {
        const firstHundradPerson=100;
        const firstHundradTicketPrice=firstHundradPerson*firstHundradRate;
        const secondHundradPerson=200;

        const secondHundradTicketPrice=secondHundradPerson*secondHundradRate;
        const restTicketQuantity=ticketQuantity-200;
        const restTicketPrice=restTicketQuantity*restRate;
        const totalTicketPriceNumber=firstHundradTicketPrice+secondHundradTicketPrice+restTicketPrice;
        return totalTicketPriceNumber;
      
    }
}
 const ticketNumber=ticketPrice(230)
 console.log(ticketNumber)