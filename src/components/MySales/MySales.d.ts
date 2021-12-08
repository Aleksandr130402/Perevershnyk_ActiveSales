interface Departments {
	name: string;
	price: number;
}

interface Locations {
	name: string;
	departments: Departments[];
}

export interface ItemSales {
	month: string;
	location: Locations[];
	total: number;
}

export interface MySalesProps {
	dataMySales: ItemSales;
}
