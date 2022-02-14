import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsInt, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';

@Exclude()
export class SalesBySectionsDto {
	@Expose()
	@IsInt()
	public amount: number;

	@Expose()
	@IsString()
	@MaxLength(3)
	public currency: string;

	@Expose()
	@IsBoolean()
	@IsOptional()
	public isCurrent: boolean;

	@Expose()
	@IsString()
	public section: string;
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
	@ValidateNested({ each: true })
	public mySales: MySalesDto;
}
