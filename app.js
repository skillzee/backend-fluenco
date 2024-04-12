import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import couponRouter from "./routes/coupon.routes.js";

export const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*", 
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);

app.use("/api/v1/coupons" ,couponRouter); 


app.get("/api/couponData",  async (req, res) => {
  const couponData = [
    {
      id: 1,
      couponCode: "SAVE10",
      brandName: "Example Brand",
      category: "Electronics",
      productLink: "https://example.com/product123",
      validTill: "2024-05-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 2,
      couponCode: "GET20OFF",
      brandName: "Another Brand",
      category: "Clothing",
      productLink: "https://anotherbrand.com/shirt456",
      validTill: "2024-06-30",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 3,
      couponCode: "SPRINGSALE",
      brandName: "Fashion Outlet",
      category: "Apparel",
      productLink: "https://fashionoutlet.com/dress789",
      validTill: "2024-04-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 4,
      couponCode: "FREESHIP",
      brandName: "Home Goods Emporium",
      category: "Home & Garden",
      productLink: "https://homegoods.com/furniture101",
      validTill: "2024-05-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 5,
      couponCode: "20PERCENTOFF",
      brandName: "Tech Haven",
      category: "Electronics",
      productLink: "https://techhaven.com/laptop234",
      validTill: "2024-06-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 6,
      couponCode: "SUMMERDEAL",
      brandName: "Outdoor Adventures",
      category: "Sports & Outdoors",
      productLink: "https://outdooradventures.com/tent567",
      validTill: "2024-07-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 7,
      couponCode: "GET50",
      brandName: "Book Emporium",
      category: "Books",
      productLink: "https://bookemporium.com/book789",
      validTill: "2024-06-30",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 8,
      couponCode: "BUY2GET1",
      brandName: "Grocery World",
      category: "Groceries",
      productLink: "https://groceryworld.com/product789",
      validTill: "2024-05-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 9,
      couponCode: "SPRINGSAVINGS",
      brandName: "Fitness Center",
      category: "Health & Fitness",
      productLink: "https://fitnesscenter.com/membership123",
      validTill: "2024-05-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 10,
      couponCode: "HOME10",
      brandName: "Furniture Mart",
      category: "Home & Garden",
      productLink: "https://furnituremart.com/sofa456",
      validTill: "2024-04-30",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 11,
      couponCode: "OFFER25",
      brandName: "Beauty Essentials",
      category: "Beauty",
      productLink: "https://beautyessentials.com/lipstick789",
      validTill: "2024-06-30",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 12,
      couponCode: "DISCOUNT20",
      brandName: "Pet Paradise",
      category: "Pets",
      productLink: "https://petparadise.com/dogfood123",
      validTill: "2024-05-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 13,
      couponCode: "WEEKENDSALE",
      brandName: "Fashion Hub",
      category: "Apparel",
      productLink: "https://fashionhub.com/shoes789",
      validTill: "2024-04-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 14,
      couponCode: "SAVEMORE",
      brandName: "Gadget Universe",
      category: "Electronics",
      productLink: "https://gadgetuniverse.com/smartwatch456",
      validTill: "2024-05-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 15,
      couponCode: "GET15OFF",
      brandName: "Toy Land",
      category: "Toys",
      productLink: "https://toyland.com/actionfigure789",
      validTill: "2024-06-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 16,
      couponCode: "SPRINGTIME",
      brandName: "Garden Oasis",
      category: "Home & Garden",
      productLink: "https://gardenoasis.com/plants101",
      validTill: "2024-04-30",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 17,
      couponCode: "SUNNYDAYS",
      brandName: "Beach Essentials",
      category: "Travel",
      productLink: "https://beachessentials.com/sunglasses789",
      validTill: "2024-07-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 18,
      couponCode: "REFRESH15",
      brandName: "Health Haven",
      category: "Health & Fitness",
      productLink: "https://healthhaven.com/vitamins123",
      validTill: "2024-05-31",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 19,
      couponCode: "MIDYEARSALE",
      brandName: "Electro World",
      category: "Electronics",
      productLink: "https://electroworld.com/smartphone789",
      validTill: "2024-06-30",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 20,
      couponCode: "BUY3GET1",
      brandName: "Snack Corner",
      category: "Food & Beverages",
      productLink: "https://snackcorner.com/chips123",
      validTill: "2024-05-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 21,
      couponCode: "WEEKENDFUN",
      brandName: "Entertainment Zone",
      category: "Entertainment",
      productLink: "https://entertainmentzone.com/tickets789",
      validTill: "2024-06-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 22,
      couponCode: "MOVIEDEAL",
      brandName: "Cineplex",
      category: "Movies",
      productLink: "https://cineplex.com/deals123",
      validTill: "2024-07-20",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 23,
      couponCode: "FAMILYFUN",
      brandName: "Adventure Park",
      category: "Outdoor Activities",
      productLink: "https://adventurepark.com/specialoffer456",
      validTill: "2024-08-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 24,
      couponCode: "GAMEREGION",
      brandName: "GameStop",
      category: "Gaming",
      productLink: "https://gamestop.com/discount789",
      validTill: "2024-09-05",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 25,
      couponCode: "BOOKLOVER",
      brandName: "Bookstore",
      category: "Books",
      productLink: "https://bookstore.com/salebooks123",
      validTill: "2024-10-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 26,
      couponCode: "SPORTSFAN",
      brandName: "Sports Outlet",
      category: "Sports",
      productLink: "https://sportsoutlet.com/sportsdeal456",
      validTill: "2024-11-20",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 27,
      couponCode: "FASHIONISTA",
      brandName: "Fashion Boutique",
      category: "Fashion",
      productLink: "https://fashionboutique.com/fashionoffer789",
      validTill: "2024-12-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 28,
      couponCode: "TECHSAVVY",
      brandName: "Electronics Store",
      category: "Electronics",
      productLink: "https://electronicsstore.com/techdiscount123",
      validTill: "2025-01-05",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 29,
      couponCode: "FOODIE",
      brandName: "Restaurant",
      category: "Food & Dining",
      productLink: "https://restaurant.com/fooddeal456",
      validTill: "2025-02-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 30,
      couponCode: "TRAVELTIME",
      brandName: "Travel Agency",
      category: "Travel",
      productLink: "https://travelagency.com/traveloffer789",
      validTill: "2025-03-20",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 31,
      couponCode: "PETLOVE",
      brandName: "Pet Store",
      category: "Pets",
      productLink: "https://petstore.com/petsale123",
      validTill: "2025-04-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 32,
      couponCode: "FITNESSFUN",
      brandName: "Fitness Center",
      category: "Fitness",
      productLink: "https://fitnesscenter.com/fitnessoffer456",
      validTill: "2025-05-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 33,
      couponCode: "HOMEDECOR",
      brandName: "Home Goods",
      category: "Home & Decor",
      productLink: "https://homegoods.com/homedeal789",
      validTill: "2025-06-20",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 34,
      couponCode: "ARTLOVER",
      brandName: "Art Gallery",
      category: "Art",
      productLink: "https://artgallery.com/artoffer123",
      validTill: "2025-07-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 35,
      couponCode: "GARDENING",
      brandName: "Garden Center",
      category: "Gardening",
      productLink: "https://gardencenter.com/gardendeal456",
      validTill: "2025-08-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 36,
      couponCode: "HEALTHYLIFE",
      brandName: "Health Store",
      category: "Health & Wellness",
      productLink: "https://healthstore.com/healthoffer789",
      validTill: "2025-09-20",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 37,
      couponCode: "BEAUTYSAVVY",
      brandName: "Beauty Salon",
      category: "Beauty",
      productLink: "https://beautysalon.com/beautydiscount123",
      validTill: "2025-10-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 38,
      couponCode: "CRAFTLOVER",
      brandName: "Craft Store",
      category: "Crafts",
      productLink: "https://craftstore.com/craftdeal456",
      validTill: "2025-11-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 39,
      couponCode: "HOBBYTIME",
      brandName: "Hobby Shop",
      category: "Hobbies",
      productLink: "https://hobbyshop.com/hobbyoffer789",
      validTill: "2025-12-20",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 40,
      couponCode: "MUSICLOVER",
      brandName: "Music Store",
      category: "Music",
      productLink: "https://musicstore.com/musicdeal123",
      validTill: "2026-01-10",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 41,
      couponCode: "WORKOUTTIME",
      brandName: "Gym",
      category: "Fitness",
      productLink: "https://gym.com/fitnessoffer456",
      validTill: "2026-02-15",
      terms_and_condition: "Please refer to terms and conditions for details."
    },
    {
      id: 42,
      couponCode: "GAMINGDEAL",
      brandName: "Gaming Store",
      category: "Gaming",
      productLink: "https://gamingstore.com/gamingdiscount789",
      validTill: "2026-03-20",
      
    },
    {
      id: 43,
      couponCode: "BOOKWORM",
      brandName: "Bookshop",
      category: "Books",
      productLink: "https://bookshop.com/booksale123",
      validTill: "2026-04-10",
    },
  ];
  res.send(couponData);
});

app.get("/api/creator", (req, res) => {
  const influencers = [
    {
      id: 1,
      name: "John Doe",
      instagram: "https://www.instagram.com/johndoe/",
      youtube: "https://www.youtube.com/johndoe/",
      instagramFollowers: "1M",
      youtubeSubscribers: "500K",
      imageLink: "https://example.com/influencer1.jpg",
      category: "Lifestyle",
    },
    {
      id: 2,
      name: "Jane Smith",
      instagram: "https://www.instagram.com/janesmith/",
      youtube: "https://www.youtube.com/janesmith/",
      instagramFollowers: "800K",
      youtubeSubscribers: "200K",
      imageLink: "https://example.com/influencer2.jpg",
      category: "Fashion",
    },
    {
      id: 3,
      name: "Alice Johnson",
      instagram: "https://www.instagram.com/alicejohnson/",
      youtube: "https://www.youtube.com/alicejohnson/",
      instagramFollowers: "1.2M",
      youtubeSubscribers: "300K",
      imageLink: "https://example.com/influencer3.jpg",
      category: "Fitness",
    },
    {
      id: 4,
      name: "Michael Brown",
      instagram: "https://www.instagram.com/michaelbrown/",
      youtube: "https://www.youtube.com/michaelbrown/",
      instagramFollowers: "900K",
      youtubeSubscribers: "400K",
      imageLink: "https://example.com/influencer4.jpg",
      category: "Food",
    },
    {
      id: 5,
      name: "Emily Wilson",
      instagram: "https://www.instagram.com/emilywilson/",
      youtube: "https://www.youtube.com/emilywilson/",
      instagramFollowers: "600K",
      youtubeSubscribers: "100K",
      imageLink: "https://example.com/influencer5.jpg",
      category: "Travel",
    },
    {
      id: 6,
      name: "William Lee",
      instagram: "https://www.instagram.com/williamlee/",
      youtube: "https://www.youtube.com/williamlee/",
      instagramFollowers: "700K",
      youtubeSubscribers: "150K",
      imageLink: "https://example.com/influencer6.jpg",
      category: "Technology",
    },
    {
      id: 7,
      name: "Sophia Garcia",
      instagram: "https://www.instagram.com/sophiagarcia/",
      youtube: "https://www.youtube.com/sophiagarcia/",
      instagramFollowers: "1.1M",
      youtubeSubscribers: "200K",
      imageLink: "https://example.com/influencer7.jpg",
      category: "Beauty",
    },
    {
      id: 8,
      name: "James Taylor",
      instagram: "https://www.instagram.com/jamestaylor/",
      youtube: "https://www.youtube.com/jamestaylor/",
      instagramFollowers: "850K",
      youtubeSubscribers: "250K",
      imageLink: "https://example.com/influencer8.jpg",
      category: "Gaming",
    },
    {
      id: 9,
      name: "Olivia Martinez",
      instagram: "https://www.instagram.com/oliviamartinez/",
      youtube: "https://www.youtube.com/oliviamartinez/",
      instagramFollowers: "950K",
      youtubeSubscribers: "300K",
      imageLink: "https://example.com/influencer9.jpg",
      category: "DIY",
    },
    {
      id: 10,
      name: "Ethan Anderson",
      instagram: "https://www.instagram.com/ethananderson/",
      youtube: "https://www.youtube.com/ethananderson/",
      instagramFollowers: "750K",
      youtubeSubscribers: "200K",
      imageLink: "https://example.com/influencer10.jpg",
      category: "Music",
    },
    {
      id: 11,
      name: "Emma Davis",
      instagram: "https://www.instagram.com/emmadavis/",
      youtube: "https://www.youtube.com/emmadavis/",
      instagramFollowers: "850K",
      youtubeSubscribers: "400K",
      imageLink: "https://example.com/influencer11.jpg",
      category: "Art",
    },
    {
      id: 12,
      name: "Noah Wilson",
      instagram: "https://www.instagram.com/noahwilson/",
      youtube: "https://www.youtube.com/noahwilson/",
      instagramFollowers: "700K",
      youtubeSubscribers: "150K",
      imageLink: "https://example.com/influencer12.jpg",
      category: "Books",
    },
    {
      id: 13,
      name: "Ava Rodriguez",
      instagram: "https://www.instagram.com/avarodriguez/",
      youtube: "https://www.youtube.com/avarodriguez/",
      instagramFollowers: "900K",
      youtubeSubscribers: "250K",
      imageLink: "https://example.com/influencer13.jpg",
      category: "Education",
    },
    {
      id: 14,
      name: "Liam Brown",
      instagram: "https://www.instagram.com/liambrown/",
      youtube: "https://www.youtube.com/liambrown/",
      instagramFollowers: "1.1M",
      youtubeSubscribers: "500K",
      imageLink: "https://example.com/influencer14.jpg",
      category: "Entertainment",
    },
    {
      id: 15,
      name: "Isabella Harris",
      instagram: "https://www.instagram.com/isabellaharris/",
      youtube: "https://www.youtube.com/isabellaharris/",
      instagramFollowers: "650K",
      youtubeSubscribers: "150K",
      imageLink: "https://example.com/influencer15.jpg",
      category: "Fitness",
    },
    {
      id: 16,
      name: "Mia Clark",
      instagram: "https://www.instagram.com/miaclark/",
      youtube: "https://www.youtube.com/miaclark/",
      instagramFollowers: "850K",
      youtubeSubscribers: "200K",
      imageLink: "https://example.com/influencer16.jpg",
      category: "Fashion",
    },
    {
      id: 17,
      name: "Lucas Martinez",
      instagram: "https://www.instagram.com/lucasmartinez/",
      youtube: "https://www.youtube.com/lucasmartinez/",
      instagramFollowers: "950K",
      youtubeSubscribers: "400K",
      imageLink: "https://example.com/influencer17.jpg",
      category: "Food",
    },
    {
      id: 18,
      name: "Emma Davis",
      instagram: "https://www.instagram.com/emmadavis/",
      youtube: "https://www.youtube.com/emmadavis/",
      instagramFollowers: "850K",
      youtubeSubscribers: "400K",
      imageLink: "https://example.com/influencer11.jpg",
      category: "Art",
    },
    {
      id: 19,
      name: "Noah Wilson",
      instagram: "https://www.instagram.com/noahwilson/",
      youtube: "https://www.youtube.com/noahwilson/",
      instagramFollowers: "700K",
      youtubeSubscribers: "150K",
      imageLink: "https://example.com/influencer12.jpg",
      category: "Books",
    },
    {
      id: 20,
      name: "Ava Rodriguez",
      instagram: "https://www.instagram.com/avarodriguez/",
      youtube: "https://www.youtube.com/avarodriguez/",
      instagramFollowers: "900K",
      youtubeSubscribers: "250K",
      imageLink: "https://example.com/influencer13.jpg",
      category: "Education",
    },
    {
      id: 21,
      name: "Liam Brown",
      instagram: "https://www.instagram.com/liambrown/",
      youtube: "https://www.youtube.com/liambrown/",
      instagramFollowers: "1.1M",
      youtubeSubscribers: "500K",
      imageLink: "https://example.com/influencer14.jpg",
      category: "Entertainment",
    },
    {
      id: 22,
      name: "Isabella Harris",
      instagram: "https://www.instagram.com/isabellaharris/",
      youtube: "https://www.youtube.com/isabellaharris/",
      instagramFollowers: "650K",
      youtubeSubscribers: "150K",
      imageLink: "https://example.com/influencer15.jpg",
      category: "Fitness",
    },
    {
      id: 23,
      name: "Mia Clark",
      instagram: "https://www.instagram.com/miaclark/",
      youtube: "https://www.youtube.com/miaclark/",
      instagramFollowers: "850K",
      youtubeSubscribers: "200K",
      imageLink: "https://example.com/influencer16.jpg",
      category: "Fashion",
    },
    {
      id: 24,
      name: "Lucas Martinez",
      instagram: "https://www.instagram.com/lucasmartinez/",
      youtube: "https://www.youtube.com/lucasmartinez/",
      instagramFollowers: "950K",
      youtubeSubscribers: "400K",
      imageLink: "https://example.com/influencer17.jpg",
      category: "Food",
    },
  ];
  res.send(influencers);
});

app.get("/", (req,res)=>{
  res.send("Welcome to the ");
})

export default app;
