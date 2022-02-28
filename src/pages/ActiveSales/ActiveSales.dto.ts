import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsInt, IsObject, IsString, MaxLength, ValidateNested } from 'class-validator';

@Exclude()
export class SalesBySectionsDto {
	@Expose()
	@IsString()
	public section: string;

	@Expose()
	@IsInt()
	public amount: number;

	@Expose()
	@IsString()
	@MaxLength(3)
	public currency: string;
}

@Exclude()
export class SalesByAddressDto {
	@Expose()
	@IsString()
	public address: string;

	@Expose()
	@Type(() => SalesBySectionsDto)
	@IsArray()
	@ValidateNested({ each: true })
	public salesBySections: SalesBySectionsDto[];
}

@Exclude()
export class SalesByMonthsDto {
	@Expose()
	@IsString()
	public name: string;

	@Expose()
	@Type(() => SalesByAddressDto)
	@IsArray()
	@ValidateNested({ each: true })
	public salesByAddress: SalesByAddressDto[];
}

@Exclude()
export class MySalesDto {
	@Expose()
	@IsString()
	public curSection: string;

	@Expose()
	@Type(() => SalesByMonthsDto)
	@IsArray()
	@ValidateNested({ each: true })
	public salesByMonths: SalesByMonthsDto[];
}

@Exclude()
export class ActiveSalesDto {
	@Expose()
	@Type(() => MySalesDto)
	@IsObject()
	@ValidateNested({ each: true })
	public mySales: MySalesDto;
}
