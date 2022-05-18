import Title from "../common/Title"
import Item from "./Item";

const Category = (props)=>{
    const  items= [
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}du-tiec.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}dress_four.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}dam_du_tiec_icon.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}om-body.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}jumpsuit.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}du-tiec.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}du-tiec.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}du-tiec.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}du-tiec.png`},
        {title: 'Đầm dự tiệc' , categoryId: 101 , image: `${process.env.PUBLIC_URL}du-tiec.png`},

    ];
    return (
        <div>
            <Title title="Danh mục của bạn"/>
            <div className="flex flex-wrap">
                {items.map((item, i)=>{
                    return (
                        <Item key={i} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Category