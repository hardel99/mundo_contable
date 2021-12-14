import React from "react";
import { Tabs, Tab, makeStyles} from "@material-ui/core"
import styled from "styled-components";
import {AppSmsTab} from "./AppSmsTab"
import ProgramTab from "./ProgramTab"

const useStyles = makeStyles((theme) => ( {

  tabtitle:{
    [theme.breakpoints.down('xs')]: {
      fontSize:"0.6rem",
    }
  },

  tabwraper:{
    [theme.breakpoints.up('lg')]: {
      /*display: "flex",
      alignItems:"center",
      justifyContent:"center",
      border:"solid red 3px",
       */
    }
    
  }
}));

export const InfoSect = styled.div`
  background-color: #fff;
  color: var(--black);
  padding:50px 140px;
  width:100%;
  height :100vh;
  position:relative;
  top:65px;  
  /* Border transparent is a trick to keep child  well centered */

  @media screen and (max-width: 1000px) {
   padding:100px 80px;
  }
  
  @media screen and (max-width: 850px) {
    padding: 16vh 80px;
  }

  @media screen and (max-width: 600px) {
    padding:20px 20px;
  }
  
`;

export const TitleContainer = styled.div`

@media screen and (min-width: 1600px) {
  width:100%;
  //border:solid #55ff56;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  }
`;

export const TopLine = styled.div`
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: var(--blue);

`;

export const Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(25px, 5vw, 40px);
  line-height: 1.1;

  @media screen and (min-width: 1600px) {
    line-height: 2;
  }


`;

export const TabContainer = styled.div`
padding-bottom:20px;
//border:solid #ff33dd 3px;

@media screen and (min-width: 1600px) {
  padding-bottom:50px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  }

`
//-----------------------------------
const AppsSection = () => {

    const classes = useStyles();

    const [SelectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
        <InfoSect>
          <TitleContainer>
            <TopLine >Mundo Contable </TopLine>
            <Heading > Nuestras Apps para emprededores </Heading>
          </TitleContainer>
            <TabContainer>
                    <Tabs 
                    value={SelectedTab} 
                    onChange={handleChange} 
                    indicatorColor="primary"
                    className={classes.tabwraper}
                    >
                        <Tab  className={classes.tabtitle} label="App Mundo Mensajes"  />
                        <Tab  className={classes.tabtitle} label="Programa Contable" />
                        
                    </Tabs>
            </TabContainer>
            {SelectedTab === 0 && <AppSmsTab />}
            {SelectedTab === 1 && <ProgramTab />}
        </InfoSect>
        </>
    );
};

export default AppsSection;