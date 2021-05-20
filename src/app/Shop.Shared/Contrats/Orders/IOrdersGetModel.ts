export interface IOrdersGetModel {
    OrderId: number,
    CustomerName: string,
    Employee: string,
    ShipperNName: string,
    OrderDate: Date,
    RequireDate: Date,
    ShippedDate?: Date,
    Freight: number,
    ShipAddress: string,
    ShipCity: string,
    ShipRegion: string,
    ShipPostalCode: string,
    ShipCountry: string
}