import LandingPage from "./LandingPage";
import CrearGerero from "./generos/CrearGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import EditarGenero from "./generos/EditarGenero";


const rutas =[

    {path:'/generos', componente:IndiceGeneros},
    {path:'/crear', componente:CrearGerero},
    {path:'/editar', componente:EditarGenero},
    {path:'/', componente:LandingPage, exact:true}
];

export default rutas;