export interface  PackageDetails{
    name:string;
    description:string;
    readme:string;
    author:{
        name:string;
        email:string;
    }
    maintainers:{
        email:string;
        name:string;
    }[];
    license:string;
    homepage:string;
    repository:{
        url:string;
        type:string
    }

}