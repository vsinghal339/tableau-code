const getStoreYearMockData = () => {
    return {
        Year: {
            2013: {
                Q1: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
                Q2: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
                Q3: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
                Q4: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
            },
            2014: {
                Q1: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
                Q2: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
                Q3: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
                Q4: Math.floor(Math.random() * (20000 - 5000 + 1) + 5000),
            }
        }
    };
}

const generateMockData = () => {
    const mockData = {
        Store: {

        }
    }
    for (let i = 0; i < 20; i++) {
        mockData.Store[Math.floor(Math.random() * (2000 - 50 + 1) + 50)] = getStoreYearMockData();
    }
    return mockData;
}

const generateStockSalesMockData = (year,quater) => {
    let data = {};
    
    if(!year && !quater){
        let year = 2013;
        data = [
            ['1 Dec '+ (year-1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Feb '+ (year), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Apr '+ (year), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Jun '+ (year), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Aug '+ (year), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Oct '+ (year), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
            ['1 Dec '+ (year), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],   
            ['1 Feb '+ (year+1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Apr '+ (year+1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Jun '+ (year+1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Aug '+ (year+1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Oct '+ (year+1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
            ['1 Dec '+ (year+1), Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
        ];
    }
    else if(year && !quater){
        data = [
            ['1 Jan', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Feb', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Mar', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Apr', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 May', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
            ['1 Jun', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],   
            ['1 Jul', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Aug', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Sep', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Oct', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
            ['1 Nov', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
            ['1 Dec', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],      
            ['1 Jan', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],  
        ];
    }
    else if(quater){
        if(quater == 1){
            data = [
                ['6 Jan', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['16 Jan', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['26 Jan', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['5 Feb', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['15 Feb', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
                ['25 Feb', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],   
                ['7 Mar', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['17 Mar', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['27 Mar', Math.floor(Math.random() * (2000 - 50 + 1) + 50)]
            ];
        }
        else if(quater == 2){
            data = [
                ['6 Apr', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['16 Apr', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['26 Apr', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['5 May', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['15 May', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
                ['25 May', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],   
                ['7 Jun', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['17 Jun', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['27 Jun', Math.floor(Math.random() * (2000 - 50 + 1) + 50)]
            ];
        }
        else if(quater == 3){
            data = [
                ['6 Jul', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['16 Jul', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['26 Jul', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['5 Aug', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['15 Aug', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
                ['25 Aug', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],   
                ['7 Sep', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['17 Sep', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['27 Sep', Math.floor(Math.random() * (2000 - 50 + 1) + 50)]
            ];
        }
        else if(quater == 4){
            data = [
                ['6 Oct', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['16 Oct', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['26 Oct', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['5 Nov', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['15 Nov', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],        
                ['25 Nov', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],   
                ['7 Dec', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['17 Dec', Math.floor(Math.random() * (2000 - 50 + 1) + 50)],
                ['27 Dec', Math.floor(Math.random() * (2000 - 50 + 1) + 50)]
            ];
        }
    }
    return data;
}

export const generateStoreSalesData = (year, quater) => {
    return new Promise((res) => res(generateStockSalesMockData(year, quater)));
}

export const getStateDataAPI = () => {
    return new Promise((res) => res(generateMockData()));
}


