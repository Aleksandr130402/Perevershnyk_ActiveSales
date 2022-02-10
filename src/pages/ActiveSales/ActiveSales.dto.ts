import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray, IsInt, IsString, MaxLength, ValidateNested } from 'class-validator';

// @Exclude()
// export class MyRatingDto {
// 	@Expose()
// 	@IsString()
// 	public curSection: string;

// 	@Expose()
// 	@IsString()
// 	public phrase: string;

// 	@Expose()
// 	@Type(() => RatingsDto)
// 	@IsArray()
// 	@ValidateNested({ each: true })
// 	public ratings: RatingsDto[];
// }

// @Exclude()
// export class RatingsDto {
// 	@Expose()
// 	@IsString()
// 	public color: string;

// 	@Expose()
// 	@IsBoolean()
// 	public isCurrent: boolean;

// 	@Expose()
// 	@IsInt()
// 	public result: number;
// }

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
	// @IsBoolean()
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

	// @Expose()
	// @Type(() => MyRatingDto)
	// @ValidateNested({ each: true })
	// public myRating: MyRatingDto;
}
