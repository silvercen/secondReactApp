import { useState } from "react";

function EcomList()
{
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])
    let allProducts = [
        {
            prodId: 501,
            prodName: "Laptop",
            prodCost: 40000,
            prodImage:
            "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww",
        },
        {
        prodId: 502,
        prodName: "Mobile",
        prodCost: 30000,
        prodImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww",
        },
        {
        prodId: 503,
        prodName: "Tablet",
        prodCost: 20000,
        prodImage:
        "https://plus.unsplash.com/premium_photo-1673968280716-ca0c00af8a39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV0fGVufDB8fDB8fHww",
        },
        {
        prodId: 504,
        prodName: "Watch",
        prodCost: 30000,
        prodImage:
        "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7646cf71/images/Titan/Catalog/90140QM03_1.jpg?sw=600&sh=600",
        },
        {
        prodId: 505,
        prodName: "Desktop",
        prodCost: 25000,
        prodImage:
        "https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVza3RvcHxlbnwwfHwwfHx8MA%3D%3D",
        },
    ];

    function addToCart(prodId)
    {
        let cartItem = allProducts.find((eachProduct)=> eachProduct.prodId===prodId)
        let newId = cart.length===0 ? 1 : cart[cart.length-1].cartId + 1
        setCart([...cart, {...cartItem, cartId:newId}]);
    }

    function addToWishlist(prodId)
    {
        if(!wishlist.some((eachListItem) => eachListItem.prodId===prodId))
        {
            let wishlistItem = allProducts.find((eachProduct) => eachProduct.prodId===prodId)
            let newId = wishlist.length===0 ? 1 : wishlist[wishlist.length-1].wishlistId + 1
            setWishlist([...wishlist, {...wishlistItem, wishlistId:newId}]);
        }
    }

    function deleteCartItem(cartId)
    {
        let filteredCart= cart.filter((eachCartItem) => eachCartItem.cartId != cartId)
        setCart(filteredCart)
    }

    function deleteWishlistItem(wishlistId)
    {
        let filteredWishlist= wishlist.filter((eachWishlistItem) => eachWishlistItem.wishlistId != wishlistId)
        setWishlist(filteredWishlist)
    }
    
    let mappedCart=cart.map((eachCartItem)=>(
        <tr key={eachCartItem.cartId}>
            <td>{eachCartItem.cartId}</td>
            <td>{eachCartItem.prodName}</td>
            <td>{eachCartItem.prodCost}</td>
            <td><button className="btn btn-danger" onClick={()=>deleteCartItem(eachCartItem.cartId)}>🗑️</button></td>
        </tr>
    ))

    let mappedWishlist=wishlist.map((eachListItem) => (
        <tr key={eachListItem.wishlistId}>
            <td>{eachListItem.wishlistId}</td>
            <td>{eachListItem.prodName}</td>
            <td>{eachListItem.prodCost}</td>
            <td><button className="btn btn-danger" onClick={()=>deleteWishlistItem(eachListItem.wishlistId)}>🗑️</button></td>
        </tr>
    ))

    let mappedAllProducts = allProducts.map((eachProduct) => (
        <div className="col-sm-12 col-md-6 col-lg-3" key={eachProduct.prodId}>
        <div className="card m-3">
          <img className="" src={eachProduct.prodImage} style={{ height: '100px', width: 'auto'}}></img>
          <div className="card-title">
            <h5>{eachProduct.prodName}</h5>
          </div>
          <div className="card-text">
            <p>Product ID: {eachProduct.prodId}</p>
          </div>
          <div className="card-text">
            <p>Product Price: {eachProduct.prodCost}</p>
          </div>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <button className="btn btn-warning" onClick={()=>addToCart(eachProduct.prodId)}>➕</button>
            <button className="btn btn-primary" onClick={()=>addToWishlist(eachProduct.prodId)}>📃</button>
          </div>
        </div>
      </div>
    ));
    
    let cartcontent = (
        <>
            <p>Total Items:{cart.length}</p>
            <p>Total Cost:{cart.reduce((sum, eachCartItem) => sum + eachCartItem.prodCost, 0)}</p>
        </>
    )

    let wishlistcontent = (
        <>
            <p>Total Items:{wishlist.length}</p>
        </>
    )

    return (
        <>
        <div className="container m-3">
            <div className="row">
                <div className="col-9">
                    <h3>LIST OF GADGETS</h3>
                    <div className="row">
                        {mappedAllProducts}
                    </div>
                </div>
                <div className="col-3">
                    <h6>CART ITEMS</h6>
                    {cart.length === 0 ? (<><div style={{minHeight: '200px', backgroundColor: 'grey', borderRadius: '5px'}}>Cart is empty!!</div></>) : (
                        <div style={{minHeight: '200px', backgroundColor: 'grey', borderRadius: '5px'}}>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>COST</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mappedCart}
                                </tbody>
                            </table>
                            <div>
                                {cart.length!=0 ? cartcontent : ""}
                            </div>
                        </div>
                    )}
                    <p></p>
                    <h6>WISHLIST ITEMS</h6>
                    {wishlist.length === 0 ? (<><div style={{minHeight: '200px', backgroundColor: 'mediumaquamarine', borderRadius: '5px'}}>Wishlist is empty!!</div></>) : (
                        <div style={{minHeight: '200px', backgroundColor: 'mediumaquamarine', borderRadius: '5px'}}>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>COST</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mappedWishlist}
                                </tbody>
                            </table>
                            <div>
                                {wishlist.length!=0 ? wishlistcontent : ""}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    )
}

export default EcomList