import React from 'react'

const data = [
    {
        id: 1,
        img: "../src/images/userboxProfiles/female4.jpg",
        userName: "Kate brown",
        email: "brownk@gmail.com",
        amount: "4,122"
    },
    {
        id: 2,
        img: "../src/images/userboxProfiles/femaleP1.jpg",
        userName: "Beth Williams",
        email: "BethWilliams5@gmail.com",
        amount: "4,012"
    },
    {
        id: 3,
        img: "../src/images/userboxProfiles/femaleP2.jpg",
        userName: "Megan Allen",
        email: "Allen123@gmail.com",
        amount: "3,920"
    },
    {
        id: 4,
        img: "../src/images/userboxProfiles/Male2.jpg",
        userName: "Thomas Abney",
        email: "TomAbney94@gmail.com",
        amount: "3,913"
    },
    {
        id: 6,
        img: "../src/images/userboxProfiles/male3.jpg",
        userName: "Phil Green",
        email: "Philgreen96@gmail.com",
        amount: "3,820"
    },
    {
        id: 7,
        img: "../src/images/userboxProfiles/MaleProfile1.jpg",
        userName: "Ryan Elliot",
        email: "elliot123@gmail.com",
        amount: "3,789"
    },
]

const mapData = data.map(item => {
    return (
        <div className='pl-5 pr-2 flex justify-between my-8'>
        <div className='flex gap-4'>
             <img className='rounded-full w-14 h-14' src={item.img} alt="" />
            
            <div className='my-auto'>
                <h1 className='text-lg font-semibold text-gray-700'>{item.userName}</h1>
                <h1 className='text-sm'>{item.email}</h1>
            </div>
        </div>
        
        <h1 className='my-auto font-semibold text-lg'>${item.amount}</h1>
    </div>
    )
})

export default function UserBox() {
  return (
    <div className='text-gray-600 '>
    <h1 className='text-2xl'>Top Customers</h1>

    {mapData}


    </div>
  )
}
