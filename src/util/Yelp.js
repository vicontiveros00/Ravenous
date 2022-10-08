const apiKey = "nfLu2CVUeV_t61bdZnsmeb7Rgy6dwn4Ao0Qx9ur4QBFQz3UO7OpvtNcPSVjBRwvXjdf1Q1Dwr9pnfnLYXeQtSCOmd6NHAOWCunk2HxQ0qZ_pIAx6HyjlHzz4AYIxY3Yx";

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((response) => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url ? business.image_url : 'https://feb.kuleuven.be/drc/LEER/visiting-scholars-1/image-not-available.jpg/image',
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        });
    }
}

export default Yelp;