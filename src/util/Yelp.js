const apiKey = "3mFF0j1NSC4XT060u9PKf8ZgXP1py5Iu92fUj43pjq9oJ-otSe7SBbw07VW_k9EIHN7K3Na2BqJn3gJuTlzufRce5-9lpTCpeHGZQHeJJjXYyTeDqbVaTHhRqPRBY3Yx"; //api key

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://limitless-shore-11127.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
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