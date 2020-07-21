using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyOnlineStore.Models;

namespace MyOnlineStore.Controllers
{
    [ApiController]
    public class ProductController : ControllerBase
    {

        public static List<Product> products;

        static ProductController() 
        {
            products = new List<Product>()
            {
                Product.Shirt(1, "White Shirt", "Comfy tee", 9.99m, "/images/productImages/shirts/whiteshirt.png"),
                Product.Shirt(2, "Red Shirt", "Comfy tee", 9.99m, "/images/productImages/shirts/redshirt.png"),
                Product.Shirt(3, "Blue Shirt", "Comfy tee", 9.99m, "/images/productImages/shirts/blueshirt.png"),
                Product.Shirt(4, "Gray Shirt", "Comfy tee", 9.99m, "/images/productImages/shirts/grayshirt.png"),
                Product.Shirt(5, "Orange Shirt", "Comfy tee", 9.99m, "/images/productImages/shirts/orangeshirt.png"),
                Product.Shirt(6, "Pink Shirt", "Comfy tee", 9.99m, "/images/productImages/shirts/pinkshirt.png"),

                Product.Pant(21, "Black Pants", "Good pants", 14.99m, "/images/productImages/pants/blackpants.png"),
                Product.Pant(21, "Blue Pants", "Good pants", 14.99m, "/images/productImages/pants/bluepants.png"),
                Product.Pant(21, "Gray Pants", "Good pants", 14.99m, "/images/productImages/pants/graypants.png"),
                Product.Pant(21, "Khaki Pants", "Good pants", 14.99m, "/images/productImages/pants/khakipants.png"),

            };
        }


        [HttpGet]
        [Route("[controller]/products")]
        public IEnumerable<Product> GetProducts()
        {
            return products;
        }

        [HttpGet]
        [Route("[controller]/getproduct/{id}")]
        public Product GetProduct(int id)
        {
            var product = products.Where(p => p.Id == id).FirstOrDefault();
            return product;
        }

        [HttpGet]
        [Route("[controller]/featuredproduct")]
        public Product GetFeaturedProduct()
        {
            Random random = new Random();
            return products[random.Next(products.Count)];
        }

        [HttpGet]
        [Route("[controller]/searchproducts/{name}")]
        public IEnumerable<Product> SearchProducts(string name)
        {
            if (name == null || name.Equals(String.Empty))
            {
                return GetProducts();
            }
            else
            {
                var p = GetProducts().OrderByDescending(p => StringMatchCount(name, p.Name));
                return p;
            }
        }

        private static int StringMatchCount(string str, string key)
        {
            int matchCount = 0;
            for (int i = 0; i < str.Length && i < key.Length; i++)
            {
                if (str[i] == key[i])
                    matchCount++;
            }
            return matchCount;
        }
        
    }
}
