const apiKey = "Hello again to the lads over at Vaisto! If you're reading this, you're awesome."; //api key

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
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
        })
    }
}

export default Yelp;