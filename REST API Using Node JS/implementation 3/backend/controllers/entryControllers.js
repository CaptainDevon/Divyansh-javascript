const cars = [
    { id: 1, company: "Bugatti", model: "Chiron" },
    { id: 2, company: "Koenigsegg", model: "Jesko" },
    { id: 3, company: "Lamborghini", model: "Veneno" },
    { id: 4, company: "Pagani", model: "Zonda R" },
    { id: 5, company: "Ferrari", model: "LaFerrari" },
    { id: 6, company: "McLaren", model: "P1" },
    { id: 7, company: "Porsche", model: "918 Spyder" },
    { id: 8, company: "Aston Martin", model: "Valkyrie" },
    { id: 9, company: "Mercedes-Benz", model: "AMG One" },
    { id: 10, company: "Rimac", model: "Nevera" },
    { id: 11, company: "Hennessey", model: "Venom F5" },
    { id: 12, company: "SSC", model: "Tuatara" },
    { id: 13, company: "Tesla", model: "Roadster" },
    { id: 14, company: "Ford", model: "GT" },
    { id: 15, company: "Chevrolet", model: "Corvette ZR1" },
    { id: 16, company: "Dodge", model: "Viper ACR" },
    { id: 17, company: "Nissan", model: "GT-R Nismo" },
    { id: 18, company: "Toyota", model: "Supra GR" },
    { id: 19, company: "Mazda", model: "RX-7" },
    { id: 20, company: "Subaru", model: "WRX STI" }
];
export const getAllCars=(req,res)=>{
    
    res.send(cars);
};