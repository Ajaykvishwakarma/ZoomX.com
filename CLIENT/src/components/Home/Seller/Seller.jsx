
import style from './seller.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setAuth } from '../../../Redux/action';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom'
export const Seller = () => {

    const navigate = useNavigate()
    // const tokenStr = localStorage.getItem('token')
    // const token = tokenStr ? JSON.parse(tokenStr) : navigate('/signin')

    // const [ data, setData ] = useState([])
    const [currPage, setCurrPage] = useState(1)
    const dispatch = useDispatch()
    const { fetchdataObj, loading  } = useSelector((store) => store)
    const BaseUrl = `https://zoomxx.herokuapp.com`

    useEffect(() => {
        let url = `${BaseUrl}/bestsellers`
        dispatch(fetchData(url))    
    // getData()

    },[])
     async function pageChange(page) {
        setCurrPage(page)
        let url = `${BaseUrl}/bestsellers?page=${page}`
        dispatch(fetchData(url))
    }


    const [sort, setSort] = React.useState('');
  
    const handleChange = (event) => {
      setSort(event.target.value);
    };
    useEffect(() =>{
        sortBtn(sort)
    },[sort])

    async function sortBtn(sort) {
        let url = `${BaseUrl}/bestsellers?q=sort&sort=${sort}`
        dispatch(fetchData(url))
        // http://localhost:7000/photobooks?q=sort&sort=1
        // http://localhost:3000/photobook?sort=price-high
    }
    

    const [ filter, setFilter ] = React.useState('')
    const handleChange1 = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() =>{
        filterBtn(filter)
     
        
    },[filter])
    async function filterBtn(filter) {
 
        if(filter.length === 0) {
            let url = `${BaseUrl}/bestsellers`
            dispatch(fetchData(url))
        }
        else{
            let url = `${BaseUrl}/bestsellers?q=filter&base=${filter}`
            dispatch(fetchData(url))
        }
   

    }

    // const filterItem = (item) => {
    //     const updateItem = fetchdataObj?.bestsellers?.filter((el) => {
    //         return el.name = item
    //     })
    //     return updateItem;
    // }


    return (
        <div>
             <div className={style.bestseller_heading}><h1>Best Sellers</h1></div>
             <div className={style.sort}>
                        <div>
                        <FormControl sx={{  minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">Filter</InputLabel>
                            <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={filter}
                            label="Filter"
                            onChange={handleChange1}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"photobook"}>Photobook</MenuItem>
                            <MenuItem value={"display"}>Display</MenuItem>
                            <MenuItem value={"calenders"}>Calenders</MenuItem>
                            <MenuItem value={"cardbook"}>Card Stock</MenuItem>
                            <MenuItem value={"stationary"}>Stationary</MenuItem>
                            
                            </Select>
                        </FormControl>
                        </div>
                        <div>
                        <FormControl sx={{  minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">Sort</InputLabel>
                            <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={sort}
                            label="Sort"
                            onChange={handleChange}
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Price, Low to high</MenuItem>
                            <MenuItem value={-1}>Price, High to low</MenuItem>
                            
                            </Select>
                        </FormControl>
                        </div>

                    </div>
                <div className={style.seller_cat_holder}>
                   
                {fetchdataObj?.bestsellers?.map((el, index) => {
                    return (
                    <div className={style.seller_cat} key={el._id}>
                        <div className = {style.seller_img}>
                            <img src={el.image} className={style.sellerImage} />
                        </div>
                        <div className={style.seller_head}>
                            <div><p style={{fontWeight:"bold", fontSize:"18px"}}>{el.name}</p></div>
                            <div><p>From Rs <span style={{textDecoration:"line-through"}}>{el.price}</span>{" "}<span style={{color:"green"}}>{el.discount}</span></p></div>
                        </div>

                    </div>
                    )
                })}
                    
                </div>
                <div className={style.pagination}>
                    <Link to="#">&laquo;</Link>
                    {fetchdataObj?.totalPages?.map(page => <Link to={""} key={page} className={page == currPage ? "active" : ""} onClick={() => pageChange(page)}>{page}</Link>)}
                    <Link to="#">&raquo;</Link>
            </div>
            
        </div>
    )
}


// function SelectSmall (BaseUrl, dispatch) {
//     const [sort, setSort] = React.useState('');
  
//     const handleChange = (event) => {
//       setSort(event.target.value);
//     };
//     useEffect(() =>{
//         sortBtn(sort)
//     },[sort])

//     async function sortBtn(sort) {
//         let url = `${BaseUrl}/bestsellers?q=sort&sort=${sort}`
//         dispatch(fetchData(url))
//         // http://localhost:7000/photobooks?q=sort&sort=1
//         // http://localhost:3000/photobook?sort=price-high
//     }
//   //   console.log(sort)
//   //   async function sortBtn(sort) {
//   //       let url = `${BaseUrl}/photobooks?q=sort&sort=${sort}`
//   //       dispatch(fetchPhotobook(url))
//   //   }
//   //   useEffect(() => {
//   //       sortBtn(sort)
//   //   }, [sort])
  
//     return (
//       <FormControl sx={{  minWidth: 120 }} size="small">
//         <InputLabel id="demo-select-small">Sort</InputLabel>
//         <Select
//           labelId="demo-select-small"
//           id="demo-select-small"
//           value={sort}
//           label="Sort"
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={1}>Price, Low to high</MenuItem>
//           <MenuItem value={-1}>Price, High to low</MenuItem>
          
//         </Select>
//       </FormControl>
//     );
//   }