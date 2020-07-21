using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace MyOnlineStore.Models
{

    public enum ProductType { Shirt, Pant }

    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Path { get; set; }
        public ProductType ProductType { get; set; }

        private Product(int id, string name, string description, decimal price, string path, ProductType productType)
        {
            this.Id = id;
            this.Name = name;
            this.Description = description;
            this.Price = price;
            this.Path = path;
            this.ProductType = productType;
        }

        public static Product Shirt(int id, string name, string description, decimal price, string path)
        {
            return new Product(id, name, description, price, path, ProductType.Shirt);
        }

        public static Product Pant(int id, string name, string description, decimal price, string path)
        {
            return new Product(id, name, description, price, path, ProductType.Pant);
        }

    }
}

/*
    (319, 62, -191) (317, 62, -189)
 */
