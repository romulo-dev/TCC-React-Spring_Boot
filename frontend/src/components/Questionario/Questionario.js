import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Questionario.css"

function Questionario(){

    const navigate = useNavigate();

    // const [questao1, setQuestao1] = useState(0);
    var questao1 = 0;
    var questao2 = 0;
    var questao3 = 0;
    var questao4 = 0;
    var questao5 = 0;
    var questao6 = 0;
    var questao7 = 0;
    var questao8 = 0;
    var questao9 = 0;
    var questao10 = 0;
    var questao11 = 0;
    var questao12 = 0;
    var questao13 = 0;
    var questao14 = 0;
    var questao15 = 0;
    var questao16 = 0;
    var questao17 = 0;
    var questao18 = 0;
    var questao19 = 0;
    var questao20 = 0;
     
    var x = 0;
    var y = 0;
    
    function defineInputRadioComplementar(event){
        
        var n1 = event.target.value;
        console.log("valor do n1" + n1);
        let elemento = document.getElementsByName("webmaster1b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                
                console.log("valor do n1" + n1);
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar(event){
        var n2 = event.target.value;
        
        console.log("valor do n2:" + n2);
            let elemento = document.getElementsByName("webmaster1");
                if(n2 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    console.log("valor do n2:" + n2);
                    elemento[5 - n2 -1].checked = true;
                }
                      
    }

    function defineInputRadioComplementar2(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster2b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                console.log("valor do n1" + n1);
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar2(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster2");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    console.log("valor do n1" + n1);
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar3(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster3b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar3(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster3");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar4(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster4b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar4(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster4");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar5(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster5b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar5(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster5");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar6(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster6b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar6(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster6");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar7(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster7b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar7(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster7");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar8(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster8b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar8(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster8");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar9(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster9b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar9(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster9");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar10(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster10b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar10(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster10");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar11(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster11b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar11(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster11");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar12(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster12b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar12(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster12");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar13(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster13b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar13(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster13");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar14(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster14b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar14(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster14");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar15(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster15b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar15(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster15");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar16(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster16b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar16(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster16");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar17(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster17b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar17(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster17");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar18(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster18b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar18(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster18");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar19(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster19b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar19(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster19");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }
    function defineInputRadioComplementar20(event){
        
        let n1 = event.target.value;
        let elemento = document.getElementsByName("webmaster20b");
        
            if(n1 === "5"){
                for(let i=0; i < elemento.length; i++){
                    elemento[i].checked = false;
                }
            }
            else{
                elemento[5 - n1 -1].checked = true;
            }  
    }

    function defineInputRadioAbaixoComplementar20(event){
        let n1 = event.target.value;
        
            let elemento = document.getElementsByName("webmaster20");
                if(n1 === "5"){
                    for(let i=0; i < elemento.length; i++){
                        elemento[i].checked = false;
                    }
                }
                else{
                    elemento[5 - n1 -1].checked = true;
                }
                      
    }



    function calculaQuestionario(){
        
    //let questionario1 = document.getElementsByClassName("questionario-1")
    //alert(questionario1);
    // let ele1 = questionario1.getElementsByName("webmaster1")
    let ele1 = document.getElementsByName("webmaster1")
    
        for(let i = 0; i < ele1.length; i++) {
            if(ele1[i].checked){

                
                questao1 = parseInt(ele1[i].value);

                break;
            }
        }
     //setQuestao1(retornaValorQuestao1());   
        
        //let questionario2 = document.getElementsByClassName("questionario-2")
        //let ele2 = questionario2.getElementsByName("webmaster")
        let ele2 = document.getElementsByName("webmaster2")
         
            for(let i = 0; i < ele2.length; i++) {
                if(ele2[i].checked){
                    questao2 = parseInt(ele2[i].value);
                    break;
                    }
    
                }
    //let questionario3 = document.getElementsByClassName("questionario-3")
    //let ele3 = questionario3.getElementsByName("webmaster")
    let ele3 = document.getElementsByName("webmaster3")
     
        for(let i = 0; i < ele3.length; i++) {
            if(ele3[i].checked){
                questao3 = parseInt(ele3[i].value);
                break;
            }
        }
    //let questionario4 = document.getElementsByClassName("questionario-4")
    // let ele4 = questionario4.getElementsByName("webmaster")
    let ele4 = document.getElementsByName("webmaster4")
     
        for(let i = 0; i < ele4.length; i++) {
            if(ele4[i].checked){
                questao4 = parseInt(ele4[i].value);
                break;
            }
        }
    
    //let questionario5 = document.getElementsByClassName("questionario-5")
    // let ele5 = questionario5.getElementsByName("webmaster")
    let ele5 = document.getElementsByName("webmaster5")
     
        for(let i = 0; i < ele5.length; i++) {
            if(ele5[i].checked){
                questao5 = parseInt(ele5[i].value);
                break;
            }
        }
    
    // let questionario6 = document.getElementsByClassName("questionario-6")
    // let ele6 = questionario6.getElementsByName("webmaster")
    let ele6 = document.getElementsByName("webmaster6")
     
        for(let i = 0; i < ele6.length; i++) {
            if(ele6[i].checked){
                questao6 = parseInt(ele6[i].value);
                break;
            }
        }
    
    // let questionario7 = document.getElementsByClassName("questionario-7")
    // let ele7 = questionario7.getElementsByName("webmaster")
    let ele7 = document.getElementsByName("webmaster7")
     
        for(let i = 0; i < ele7.length; i++) {
            if(ele7[i].checked){
                questao7 = parseInt(ele7[i].value);
                break;
            }
        }
    
    // let questionario8 = document.getElementsByClassName("questionario-8")
    // let ele8 = questionario8.getElementsByName("webmaster")
    let ele8 = document.getElementsByName("webmaster8")
     
        for(let i = 0; i < ele8.length; i++) {
            if(ele8[i].checked){
                questao8 = parseInt(ele8[i].value);
                break;
            }
        }
    // let questionario9 = document.getElementsByClassName("questionario-9")
    // let ele9 = questionario9.getElementsByName("webmaster")
    let ele9 = document.getElementsByName("webmaster9")
     
        for(let i = 0; i < ele9.length; i++) {
            if(ele9[i].checked){
                questao9 = parseInt(ele9[i].value);
                break;
            }
        }
    // let questionario10 = document.getElementsByClassName("questionario-10")
    // let ele10 = questionario10.getElementsByName("webmaster")
    let ele10 = document.getElementsByName("webmaster10")
     
        for(let i = 0; i < ele10.length; i++) {
            if(ele10[i].checked){
                questao10 = parseInt(ele10[i].value);
                break;
            }
        }
    // let questionario11 = document.getElementsByClassName("questionario-11")
    // let ele11 = questionario11.getElementsByName("webmaster")
    let ele11 = document.getElementsByName("webmaster11")
     
        for(let i = 0; i < ele11.length; i++) {
            if(ele11[i].checked){
                questao11 = parseInt(ele11[i].value);
                break;
            }
        }
    // let questionario12 = document.getElementsByClassName("questionario-12")
    // let ele12 = questionario12.getElementsByName("webmaster")
    let ele12 = document.getElementsByName("webmaster12")
     
        for(let i = 0; i < ele12.length; i++) {
            if(ele12[i].checked){
                questao12 = parseInt(ele12[i].value);
                break;
            }
        }
    //let questionario13 = document.getElementsByClassName("questionario-13")
    // let ele13 = questionario13.getElementsByName("webmaster")
    let ele13 = document.getElementsByName("webmaster13")
     
        for(let i = 0; i < ele13.length; i++) {
            if(ele13[i].checked){
                questao13 = parseInt(ele13[i].value);
                break;
            }
        }
    // let questionario14 = document.getElementsByClassName("questionario-14")
    // let ele14 = questionario14.getElementsByName("webmaster")
    let ele14 = document.getElementsByName("webmaster14")
     
        for(let i = 0; i < ele14.length; i++) {
            if(ele14[i].checked){
                questao14 = parseInt(ele14[i].value);
                break;
            }
        }
    // let questionario15 = document.getElementsByClassName("questionario-15")
    // let ele15 = questionario15.getElementsByName("webmaster")
    let ele15 = document.getElementsByName("webmaster15")
     
        for(let i = 0; i < ele15.length; i++) {
            if(ele15[i].checked){
                questao15 = parseInt(ele15[i].value);
                break;
            }
        }
    // let questionario16 = document.getElementsByClassName("questionario-16")
    // let ele16 = questionario16.getElementsByName("webmaster")
    let ele16 = document.getElementsByName("webmaster16")
     
        for(let i = 0; i < ele16.length; i++) {
            if(ele16[i].checked){
                questao16 = parseInt(ele16[i].value);
                break;
            }
        }
    // let questionario17 = document.getElementsByClassName("questionario-17")
    // let ele17 = questionario17.getElementsByName("webmaster")
    let ele17 = document.getElementsByName("webmaster17")
     
        for(let i = 0; i < ele17.length; i++) {
            if(ele17[i].checked){
                questao17 = parseInt(ele17[i].value);
                break;
            }
        }
    // let questionario18 = document.getElementsByClassName("questionario-18")
    // let ele18 = questionario18.getElementsByName("webmaster")
    let ele18 = document.getElementsByName("webmaster18")
     
        for(let i = 0; i < ele18.length; i++) {
            if(ele18[i].checked){
                questao18 = parseInt(ele18[i].value);
                break;
            }
        }
    // let questionario19 = document.getElementsByClassName("questionario-19")
    // let ele19 = questionario19.getElementsByName("webmaster")
    let ele19 = document.getElementsByName("webmaster19")
     
        for(let i = 0; i < ele19.length; i++) {
            if(ele19[i].checked){
                questao19 = parseInt(ele19[i].value);
                break;
            }
        }
    // let questionario20 = document.getElementsByClassName("questionario-20")
    // let ele20 = questionario20.getElementsByName("webmaster")
    let ele20 = document.getElementsByName("webmaster20")
     
        for(let i = 0; i < ele20.length; i++) {
            if(ele20[i].checked){
                questao20 = parseInt(ele20[i].value);
                break;
            }
        }

    let somax = questao2+ questao3 + questao5 + questao7 + questao8 + questao10 + questao12 + 
        questao14 + questao16 + questao20
    let somay = questao1 + questao4 + questao6 + questao9 + questao11 + questao13 +
    questao15 + questao17 + questao18 + questao19

    x = somax;
    y = somay;

    let hoje = new Date();
    //let dia = `${hoje.getFullYear()}-${hoje.getMonth()}-${hoje.getDate()} ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`
    let dia = `${hoje.getDate()}-${hoje.getMonth()}-${hoje.getFullYear()} ${hoje.getHours()}:${hoje.getMinutes()}:${hoje.getSeconds()}`
        
        axios.post(`http://localhost:8080/resultado/save`, 
        { 
            
                "data": dia,
                "x": x,
                "y": y,
                "id_atleta": localStorage.getItem("idSession")
             

        }).then((res) => console.log(res.data))

        
        window.location.reload(false);


    }
    return(
        <div className="container_questionario">
            <div className="questionario-1">
                <div className="cabecalho-pergunta">
                    <h3>1. Se um de meus amigos tem um "conflito de personalidade" com um conhecido de ambos com o qual é importante se dar bem. O que eu faria?</h3>
                </div>
                <p>A- Diria a meu amigo que considero que ele tem responsabilidade parcial nos problemas com esta pessoa e procuraria fazê-lo ver de que forma esta pessoa foi afetada.</p>
                <input type="radio" name="webmaster1" value="1" 
                onClick={e => defineInputRadioComplementar(e)
            
                }/>
                <input type="radio" name="webmaster1" value="2" onClick={e => defineInputRadioComplementar(e)}/>
                <input type="radio" name="webmaster1" value="3" onClick={e => defineInputRadioComplementar(e)
            
        }/>
                <input type="radio" name="webmaster1" value="4" onClick={e => defineInputRadioComplementar(e)
            
        }/>
                <input type="radio" name="webmaster1" value="5" onClick={e => defineInputRadioComplementar(e)
            
        }/>
                <p>B- Não me envolveria, pois eu não seria capaz de continuar me dando bem com ambos, uma vez que decidi o caminho que devo seguir.</p>
                
                <input type="radio" name="webmaster1b" value="1" 
                // onChange={event => defineInputRadioAbaixoComplementar(event)}
                onClick={e => defineInputRadioAbaixoComplementar(e)}
                />
                <input type="radio" name="webmaster1b" value="2" 
                // onChange={event => defineInputRadioAbaixoComplementar(event)}
                onClick={e => defineInputRadioAbaixoComplementar(e)}
                />
                <input type="radio" name="webmaster1b" value="3" 
                //onChange={event => defineInputRadioAbaixoComplementar(event)}
                onClick={e => defineInputRadioAbaixoComplementar(e)}
                />
                <input type="radio" name="webmaster1b" value="4" 
                //onChange={event => defineInputRadioAbaixoComplementar(event)}
                onClick={e => defineInputRadioAbaixoComplementar(e)}
                />
                <input type="radio" name="webmaster1b" value="5" 
                //onChange={event => defineInputRadioAbaixoComplementar(event)}
                onClick={e => defineInputRadioAbaixoComplementar(e)}
                />
            </div>
            <div className="questionario-2">
                <div className="cabecalho-pergunta">
                    <h3>2- Se recentemente eu tive uma disputa acalorada com um dos meus amigos e percebo que ele ficou com dúvidas a meu respeito, desde aquele dia, que faria?</h3>
                </div>
                <p>A- Evitaria que as coisas piorassem chamando a tenção para o seu comportamento mas deixaria que tudo se resolvesse por si mesmo.</p>
                <input type="radio" name="webmaster2b" value="1" 
                onClick={e => defineInputRadioAbaixoComplementar2(e)}
                />
                <input type="radio" name="webmaster2b" value="2" 
                onClick={e => defineInputRadioAbaixoComplementar2(e)}
                />
                <input type="radio" name="webmaster2b" value="3" 
                onClick={e => defineInputRadioAbaixoComplementar2(e)}
                />
                <input type="radio" name="webmaster2b" value="4" 
                onClick={e => defineInputRadioAbaixoComplementar2(e)}
                />
                <input type="radio" name="webmaster2b" value="5" 
                onClick={event => defineInputRadioAbaixoComplementar2(event)}
                />
                <p>B- Chamaria a atenção sobre o seu comportamento e perguntaria como ele sente que a disputa efetou nossas relações.</p>
                <input type="radio" name="webmaster2" value="1" onClick={e => defineInputRadioComplementar2(e)}/>
                <input type="radio" name="webmaster2" value="2" onClick={e => defineInputRadioComplementar2(e)}/>
                <input type="radio" name="webmaster2" value="3" onClick={e => defineInputRadioComplementar2(e)}/>
                <input type="radio" name="webmaster2" value="4" onClick={e => defineInputRadioComplementar2(e)}/>
                <input type="radio" name="webmaster2" value="5" onClick={e => defineInputRadioComplementar2(e)}/>
            </div>
            <div className="questionario-3">
                <div className="cabecalho-pergunta">
                    <h3>3- Se um amigo começou a se esquivar e isso trouxe atitudes de afastamento, o que eu faria?</h3>
                </div>
                <p>A- Diria-lhe o que penso sobre seu comportamento e perguntaria o que ele pensa.</p>
                <input type="radio" name="webmaster3" value="1" onClick={e => defineInputRadioComplementar3(e)}/>
                <input type="radio" name="webmaster3" value="2" onClick={e => defineInputRadioComplementar3(e)}/>
                <input type="radio" name="webmaster3" value="3" onClick={e => defineInputRadioComplementar3(e)}/>
                <input type="radio" name="webmaster3" value="4" onClick={e => defineInputRadioComplementar3(e)}/>
                <input type="radio" name="webmaster3" value="5" onClick={e => defineInputRadioComplementar3(e)}/>
                <p>B- Imitaria sua conduta e faria com que nossos encontros fossem rápidos e espaçados, da maneira como ele prefere.</p>
                <input type="radio" name="webmaster3b" value="1" onClick={e => defineInputRadioAbaixoComplementar3(e)}/>
                <input type="radio" name="webmaster3b" value="2" onClick={e => defineInputRadioAbaixoComplementar3(e)}/>
                <input type="radio" name="webmaster3b" value="3" onClick={e => defineInputRadioAbaixoComplementar3(e)}/>
                <input type="radio" name="webmaster3b" value="4" onClick={e => defineInputRadioAbaixoComplementar3(e)}/>
                <input type="radio" name="webmaster3b" value="5" onClick={e => defineInputRadioAbaixoComplementar3(e)}/>
            </div>
            <div className="questionario-4">
                <div className="cabecalho-pergunta">
                    <h3>4- Se estou conversando com dois amigos e um deles traz à tona um problema pessoal meu que envolve o outro amigo, do qual ele não está inteirado, o que eu faria?</h3>
                </div>
                <p>A- Mudaria de assunto habilmente e estimularia ao amigo que tocou no assunto a fazer o mesmo.</p>
                <input type="radio" name="webmaster4b" value="1" onClick={e => defineInputRadioAbaixoComplementar4(e)}/>
                <input type="radio" name="webmaster4b" value="2" onClick={e => defineInputRadioAbaixoComplementar4(e)}/>
                <input type="radio" name="webmaster4b" value="3" onClick={e => defineInputRadioAbaixoComplementar4(e)}/>
                <input type="radio" name="webmaster4b" value="4" onClick={e => defineInputRadioAbaixoComplementar4(e)}/>
                <input type="radio" name="webmaster4b" value="5" onClick={e => defineInputRadioAbaixoComplementar4(e)}/>
                <p>B- Informaria ao amigo que ele não está inteirado sobre o assunto, sugerindo que tratássemos do assunto mais tarde.</p>
                <input type="radio" name="webmaster4" value="1" onClick={e => defineInputRadioComplementar4(e)}/>
                <input type="radio" name="webmaster4" value="2" onClick={e => defineInputRadioComplementar4(e)}/>
                <input type="radio" name="webmaster4" value="3" onClick={e => defineInputRadioComplementar4(e)}/>
                <input type="radio" name="webmaster4" value="4" onClick={e => defineInputRadioComplementar4(e)}/>
                <input type="radio" name="webmaster4" value="5" onClick={e => defineInputRadioComplementar4(e)}/>
            </div>
            <div className="questionario-5">
                <div className="cabecalho-pergunta">
                    <h3>5- Se um amigo me diz que, em sua opinião estou fazendo coisas que me tornam menos eficiente do que poderia ser em minhas relações sociais, que faria eu?</h3>
                </div>
                <p>A- Pediria que me explicasse, detalhadamente, o que ele observou e sugerisse as mudanças que devo fazer.</p>
                <input type="radio" name="webmaster5" value="1" onClick={e => defineInputRadioComplementar5(e)}/>
                <input type="radio" name="webmaster5" value="2" onClick={e => defineInputRadioComplementar5(e)}/>
                <input type="radio" name="webmaster5" value="3" onClick={e => defineInputRadioComplementar5(e)}/>
                <input type="radio" name="webmaster5" value="4" onClick={e => defineInputRadioComplementar5(e)}/>
                <input type="radio" name="webmaster5" value="5" onClick={e => defineInputRadioComplementar5(e)}/>
                <p>B- Ficaria sentido com a crítica e explicaria porque me comporto assim.</p>
                <input type="radio" name="webmaster5b" value="1" onClick={e => defineInputRadioAbaixoComplementar5(e)}/>
                <input type="radio" name="webmaster5b" value="2" onClick={e => defineInputRadioAbaixoComplementar5(e)}/>
                <input type="radio" name="webmaster5b" value="3" onClick={e => defineInputRadioAbaixoComplementar5(e)}/>
                <input type="radio" name="webmaster5b" value="4" onClick={e => defineInputRadioAbaixoComplementar5(e)}/>
                <input type="radio" name="webmaster5b" value="5" onClick={e => defineInputRadioAbaixoComplementar5(e)}/>
            </div>
            <div className="questionario-6">
                <div className="cabecalho-pergunta">
                    <h3>6- Se um dos meus amigos aspira um posto em nossa organização para qual considero que não está qualificado, e se ele foi indicado para este posto pelo nosso chefe, o que eu faria?</h3>
                </div>
                <p>A- Não mencionaria meu receio nem ao meu amigo nem ao chefe e deixaria que eles tomassem a decisão final.</p>
                <input type="radio" name="webmaster6b" value="1" onClick={e => defineInputRadioAbaixoComplementar6(e)}/>
                <input type="radio" name="webmaster6b" value="2" onClick={e => defineInputRadioAbaixoComplementar6(e)}/>
                <input type="radio" name="webmaster6b" value="3" onClick={e => defineInputRadioAbaixoComplementar6(e)}/>
                <input type="radio" name="webmaster6b" value="4" onClick={e => defineInputRadioAbaixoComplementar6(e)}/>
                <input type="radio" name="webmaster6b" value="5" onClick={e => defineInputRadioAbaixoComplementar6(e)}/>
                <p>B- Faria ver, a meu amigo e ao chefe meu receio e deixaria que eles tomassem a decisão final.</p>
                <input type="radio" name="webmaster6" value="1" onClick={e => defineInputRadioComplementar6(e)}/>
                <input type="radio" name="webmaster6" value="2" onClick={e => defineInputRadioComplementar6(e)}/>
                <input type="radio" name="webmaster6" value="3" onClick={e => defineInputRadioComplementar6(e)}/>
                <input type="radio" name="webmaster6" value="4" onClick={e => defineInputRadioComplementar6(e)}/>
                <input type="radio" name="webmaster6" value="5" onClick={e => defineInputRadioComplementar6(e)}/>
            </div>
            <div className="questionario-7">
                <div className="cabecalho-pergunta">
                    <h3>7- Se percebo que um dos meus amigos começa a ser desleal comigo e com outros amigos e nenhum deles lhe chama a atenção, que faria eu?</h3>
                </div>
                <p>A- Perguntaria a várias pessoas como vêem a situação para saber se elas também consideram desleal o que ele está fazendo.</p>
                <input type="radio" name="webmaster7" value="1" onClick={e => defineInputRadioComplementar7(e)}/>
                <input type="radio" name="webmaster7" value="2" onClick={e => defineInputRadioComplementar7(e)}/>
                <input type="radio" name="webmaster7" value="3" onClick={e => defineInputRadioComplementar7(e)}/>
                <input type="radio" name="webmaster7" value="4" onClick={e => defineInputRadioComplementar7(e)}/>
                <input type="radio" name="webmaster7" value="5" onClick={e => defineInputRadioComplementar7(e)}/>
                <p>B- Não perguntaria a outros sobre o que pensam de nosso amigo, mas esperaria que eles comentassem o fato comigo.</p>
                <input type="radio" name="webmaster7b" value="1" onClick={e => defineInputRadioAbaixoComplementar7(e)}/>
                <input type="radio" name="webmaster7b" value="2" onClick={e => defineInputRadioAbaixoComplementar7(e)}/>
                <input type="radio" name="webmaster7b" value="3" onClick={e => defineInputRadioAbaixoComplementar7(e)}/>
                <input type="radio" name="webmaster7b" value="4" onClick={e => defineInputRadioAbaixoComplementar7(e)}/>
                <input type="radio" name="webmaster7b" value="5" onClick={e => defineInputRadioAbaixoComplementar7(e)}/>
            </div>
            <div className="questionario-8">
                <div className="cabecalho-pergunta">
                    <h3>8- Se estou preocupado com alguns assuntos e um amigo me diz que estou começando a parecer irritado e que estou aborrecido com coisas sem importância, que eu faria?</h3>
                </div>
                <p>A- Diria-lhe que tenho estado preocupado e, provavelmente, nervoso por algum tempo e que preferia não ser incomodado.</p>
                <input type="radio" name="webmaster8b" value="1" onClick={e => defineInputRadioAbaixoComplementar8(e)}/>
                <input type="radio" name="webmaster8b" value="2" onClick={e => defineInputRadioAbaixoComplementar8(e)}/>
                <input type="radio" name="webmaster8b" value="3" onClick={e => defineInputRadioAbaixoComplementar8(e)}/>
                <input type="radio" name="webmaster8b" value="4" onClick={e => defineInputRadioAbaixoComplementar8(e)}/>
                <input type="radio" name="webmaster8b" value="5" onClick={e => defineInputRadioAbaixoComplementar8(e)}/>
                <p>B- Escutaria suas queixas, contudo, não me preocuparia em lhe explicar minhas atitudes.</p>
                <input type="radio" name="webmaster8" value="1" onClick={e => defineInputRadioComplementar8(e)}/>
                <input type="radio" name="webmaster8" value="2" onClick={e => defineInputRadioComplementar8(e)}/>
                <input type="radio" name="webmaster8" value="3" onClick={e => defineInputRadioComplementar8(e)}/>
                <input type="radio" name="webmaster8" value="4" onClick={e => defineInputRadioComplementar8(e)}/>
                <input type="radio" name="webmaster8" value="5" onClick={e => defineInputRadioComplementar8(e)}/>
            </div>
            <div className="questionario-9">
                <div className="cabecalho-pergunta">
                    <h3>9- Se eu escutasse meus amigos discutirem um boato negativo a respeito de um outro amigo, o qual sei que poderia lhe prejudicar, e ele perguntasse o que sei a respeito, que eu faria?</h3>
                </div>
                <p>A- Diria-lhe que não estou sabendo do assunto e lhe confortaria dizendo que ninguém poderia acreditar num boato como esses.</p>
                <input type="radio" name="webmaster9b" value="1" onClick={e => defineInputRadioAbaixoComplementar9(e)}/>
                <input type="radio" name="webmaster9b" value="2" onClick={e => defineInputRadioAbaixoComplementar9(e)}/>
                <input type="radio" name="webmaster9b" value="3" onClick={e => defineInputRadioAbaixoComplementar9(e)}/>
                <input type="radio" name="webmaster9b" value="4" onClick={e => defineInputRadioAbaixoComplementar9(e)}/>
                <input type="radio" name="webmaster9b" value="5" onClick={e => defineInputRadioAbaixoComplementar9(e)}/>
                <p>B- Diria-lhe exatamente o que escutei, quando escutei e de quem escutei.</p>
                <input type="radio" name="webmaster9" value="1" onClick={e => defineInputRadioComplementar9(e)}/>
                <input type="radio" name="webmaster9" value="2" onClick={e => defineInputRadioComplementar9(e)}/>
                <input type="radio" name="webmaster9" value="3" onClick={e => defineInputRadioComplementar9(e)}/>
                <input type="radio" name="webmaster9" value="4" onClick={e => defineInputRadioComplementar9(e)}/>
                <input type="radio" name="webmaster9" value="5" onClick={e => defineInputRadioComplementar9(e)}/>
            </div>
            <div className="questionario-10">
                <div className="cabecalho-pergunta">
                    <h3>10- Se um amigo afirma que tenho um traço de personalidade indesejado, o qual é importante modificar, que eu faria?</h3>
                </div>
                <p>A- Consideraria seus comentários inoportunos e evitaria discutir esse assunto.</p>
                <input type="radio" name="webmaster10b" value="1" onClick={e => defineInputRadioAbaixoComplementar10(e)}/>
                <input type="radio" name="webmaster10b" value="2" onClick={e => defineInputRadioAbaixoComplementar10(e)}/>
                <input type="radio" name="webmaster10b" value="3" onClick={e => defineInputRadioAbaixoComplementar10(e)}/>
                <input type="radio" name="webmaster10b" value="4" onClick={e => defineInputRadioAbaixoComplementar10(e)}/>
                <input type="radio" name="webmaster10b" value="5" onClick={e => defineInputRadioAbaixoComplementar10(e)}/>
                <p>B- Falaria sobre o assunto abertamente com ele, procurando compreender de que forma esse traço de personalidade o afeta.</p>
                <input type="radio" name="webmaster10" value="1" onClick={e => defineInputRadioComplementar10(e)}/>
                <input type="radio" name="webmaster10" value="2" onClick={e => defineInputRadioComplementar10(e)}/>
                <input type="radio" name="webmaster10" value="3" onClick={e => defineInputRadioComplementar10(e)}/>
                <input type="radio" name="webmaster10" value="4" onClick={e => defineInputRadioComplementar10(e)}/>
                <input type="radio" name="webmaster10" value="5" onClick={e => defineInputRadioComplementar10(e)}/>
            </div>
            <div className="questionario-11">
                <div className="cabecalho-pergunta">
                    <h3>11- Se minhas relações com um amigo fossem abaladas por sucessivos conflitos sobre um problema importante para ambos, o que eu faria?</h3>
                </div>
                <p>A- Tomaria cuidado com as conversas com ele, para que esse problema não surgisse novamente e piorasse nossas relações.</p>
                <input type="radio" name="webmaster11b" value="1" onClick={e => defineInputRadioAbaixoComplementar11(e)}/>
                <input type="radio" name="webmaster11b" value="2" onClick={e => defineInputRadioAbaixoComplementar11(e)}/>
                <input type="radio" name="webmaster11b" value="3" onClick={e => defineInputRadioAbaixoComplementar11(e)}/>
                <input type="radio" name="webmaster11b" value="4" onClick={e => defineInputRadioAbaixoComplementar11(e)}/>
                <input type="radio" name="webmaster11b" value="5" onClick={e => defineInputRadioAbaixoComplementar11(e)}/>
                <p>B- Assinalaria os pontos de controvérsia que abalam nossa relação, sugerindo que discutíssimos até conseguir resolvê-los.</p>
                <input type="radio" name="webmaster11" value="1" onClick={e => defineInputRadioComplementar11(e)}/>
                <input type="radio" name="webmaster11" value="2" onClick={e => defineInputRadioComplementar11(e)}/>
                <input type="radio" name="webmaster11" value="3" onClick={e => defineInputRadioComplementar11(e)}/>
                <input type="radio" name="webmaster11" value="4" onClick={e => defineInputRadioComplementar11(e)}/>
                <input type="radio" name="webmaster11" value="5" onClick={e => defineInputRadioComplementar11(e)}/>
            </div>
            <div className="questionario-12">
                <div className="cabecalho-pergunta">
                    <h3>12- Se durante uma discussão com um amigo, sobre seus problemas de comportamento ele sugerisse que abordássemos meus problemas de comportamento, o que eu faria?</h3>
                </div>
                <p>A- Trataria de conservar a discussão fora dos meus problemas, dando a entender que outros amigos, frequentemente, abordam esses assuntos.</p>
                <input type="radio" name="webmaster12b" value="1" onClick={e => defineInputRadioAbaixoComplementar12(e)}/>
                <input type="radio" name="webmaster12b" value="2" onClick={e => defineInputRadioAbaixoComplementar12(e)}/>
                <input type="radio" name="webmaster12b" value="3" onClick={e => defineInputRadioAbaixoComplementar12(e)}/>
                <input type="radio" name="webmaster12b" value="4" onClick={e => defineInputRadioAbaixoComplementar12(e)}/>
                <input type="radio" name="webmaster12b" value="5" onClick={e => defineInputRadioAbaixoComplementar12(e)}/>
                <p>B- Receberia bem a oportunidade de ouvir a opinião ao meu respeito e estimularia seus comentários.</p>
                <input type="radio" name="webmaster12" value="1" onClick={e => defineInputRadioComplementar12(e)}/>
                <input type="radio" name="webmaster12" value="2" onClick={e => defineInputRadioComplementar12(e)}/>
                <input type="radio" name="webmaster12" value="3" onClick={e => defineInputRadioComplementar12(e)}/>
                <input type="radio" name="webmaster12" value="4" onClick={e => defineInputRadioComplementar12(e)}/>
                <input type="radio" name="webmaster12" value="5" onClick={e => defineInputRadioComplementar12(e)}/>
            </div>
            <div className="questionario-13">
                <div className="cabecalho-pergunta">
                    <h3>13- Se um amigo começasse a falar sobre seus sentimentos de desapontamento em relação a outro amigo, e eu estivesse francamente de acordo, o que eu faria?</h3>
                </div>
                <p>A- Ouviria e também expressaria meus sentimentos, de modo que ele conhecesse o meu ponto de vista.</p>
                <input type="radio" name="webmaster13" value="1" onClick={e => defineInputRadioComplementar13(e)}/>
                <input type="radio" name="webmaster13" value="2" onClick={e => defineInputRadioComplementar13(e)}/>
                <input type="radio" name="webmaster13" value="3" onClick={e => defineInputRadioComplementar13(e)}/>
                <input type="radio" name="webmaster13" value="4" onClick={e => defineInputRadioComplementar13(e)}/>
                <input type="radio" name="webmaster13" value="5" onClick={e => defineInputRadioComplementar13(e)}/>
                <p>B- Ouviria, mas não expressaria meus pontos de vista e opiniões negativas, uma vez que ele poderia comentar com outro. </p>
                <input type="radio" name="webmaster13b" value="1" onClick={e => defineInputRadioAbaixoComplementar13(e)}/>
                <input type="radio" name="webmaster13b" value="2" onClick={e => defineInputRadioAbaixoComplementar13(e)}/>
                <input type="radio" name="webmaster13b" value="3" onClick={e => defineInputRadioAbaixoComplementar13(e)}/>
                <input type="radio" name="webmaster13b" value="4" onClick={e => defineInputRadioAbaixoComplementar13(e)}/>
                <input type="radio" name="webmaster13b" value="5" onClick={e => defineInputRadioAbaixoComplementar13(e)}/>
            </div>
            <div className="questionario-14">
                <div className="cabecalho-pergunta">
                    <h3>14- Se fosse espalhado um boato negativo ao meu respeito, e eu suspeitasse que um dos meus amigos o teria escutado, o que eu faria?</h3>
                </div>
                <p>A- Evitaria mencionar o problema e esperaria que ele resolvesse me comunicar, se quisesse.</p>
                <input type="radio" name="webmaster14b" value="1" onClick={e => defineInputRadioAbaixoComplementar14(e)}/>
                <input type="radio" name="webmaster14b" value="2" onClick={e => defineInputRadioAbaixoComplementar14(e)}/>
                <input type="radio" name="webmaster14b" value="3" onClick={e => defineInputRadioAbaixoComplementar14(e)}/>
                <input type="radio" name="webmaster14b" value="4" onClick={e => defineInputRadioAbaixoComplementar14(e)}/>
                <input type="radio" name="webmaster14b" value="5" onClick={e => defineInputRadioAbaixoComplementar14(e)}/>
                <p>B- Correria o risco de ofendê-lo, perguntando-lhe diretamente o que estaria sabendo do assunto.</p>
                <input type="radio" name="webmaster14" value="1" onClick={e => defineInputRadioComplementar14(e)}/>
                <input type="radio" name="webmaster14" value="2" onClick={e => defineInputRadioComplementar14(e)}/>
                <input type="radio" name="webmaster14" value="3" onClick={e => defineInputRadioComplementar14(e)}/>
                <input type="radio" name="webmaster14" value="4" onClick={e => defineInputRadioComplementar14(e)}/>   
                <input type="radio" name="webmaster14" value="5" onClick={e => defineInputRadioComplementar14(e)}/>
            </div>
            <div className="questionario-15">
                <div className="cabecalho-pergunta">
                    <h3>15- Se observando um amigo, eu considerasse que ele está agindo de maneira prejudicial à suas relações, o que eu faria?</h3>
                </div>
                <p>A- Correria o risco de ser considerado um intrometido e lhe diria o que eu observei, bem como as minhas reações frente a isso</p>
                <input type="radio" name="webmaster15" value="1" onClick={e => defineInputRadioComplementar15(e)}/>
                <input type="radio" name="webmaster15" value="2" onClick={e => defineInputRadioComplementar15(e)}/>
                <input type="radio" name="webmaster15" value="3" onClick={e => defineInputRadioComplementar15(e)}/>
                <input type="radio" name="webmaster15" value="4" onClick={e => defineInputRadioComplementar15(e)}/>
                <input type="radio" name="webmaster15" value="5" onClick={e => defineInputRadioComplementar15(e)}/>
                <p>B- Guardaria minhas opiniões para não parecer que interfiro em assuntos que não são da minha competência.</p>
                <input type="radio" name="webmaster15b" value="1" onClick={e => defineInputRadioAbaixoComplementar15(e)}/>
                <input type="radio" name="webmaster15b" value="2" onClick={e => defineInputRadioAbaixoComplementar15(e)}/>
                <input type="radio" name="webmaster15b" value="3" onClick={e => defineInputRadioAbaixoComplementar15(e)}/>
                <input type="radio" name="webmaster15b" value="4" onClick={e => defineInputRadioAbaixoComplementar15(e)}/>
                <input type="radio" name="webmaster15b" value="5" onClick={e => defineInputRadioAbaixoComplementar15(e)}/>
            </div>
            <div className="questionario-16">
                <div className="cabecalho-pergunta">
                    <h3>16- Se estivesse conversando com amigos, e um deles, inadvertidamente, mencionasse um problema pessoal, no qual eu estaria envolvido, mas sem ter conhecimento, o que eu faria?</h3>
                </div>
                <p>A- Iria pressioná-lo para que me informasse sobre o problema e suas opiniões a respeito. </p>
                <input type="radio" name="webmaster16b" value="1" onClick={e => defineInputRadioAbaixoComplementar16(e)}/>
                <input type="radio" name="webmaster16b" value="2" onClick={e => defineInputRadioAbaixoComplementar16(e)}/>
                <input type="radio" name="webmaster16b" value="3" onClick={e => defineInputRadioAbaixoComplementar16(e)}/>
                <input type="radio" name="webmaster16b" value="4" onClick={e => defineInputRadioAbaixoComplementar16(e)}/>
                <input type="radio" name="webmaster16b" value="5" onClick={e => defineInputRadioAbaixoComplementar16(e)}/>
                <p>B- Deixaria de critério de meus amigos me informarem ou não, dando-lhes opção par que mudassem de assunto se desejassem.</p>
                <input type="radio" name="webmaster16" value="1" onClick={e => defineInputRadioComplementar16(e)}/>
                <input type="radio" name="webmaster16" value="2" onClick={e => defineInputRadioComplementar16(e)}/>
                <input type="radio" name="webmaster16" value="3" onClick={e => defineInputRadioComplementar16(e)}/>
                <input type="radio" name="webmaster16" value="4" onClick={e => defineInputRadioComplementar16(e)}/>
                <input type="radio" name="webmaster16" value="5" onClick={e => defineInputRadioComplementar16(e)}/>
            </div>
            <div className="questionario-17">
                <div className="cabecalho-pergunta">
                    <h3>17- Se um amigo se mostrasse preocupado, aborrecido com coisas aparentemente sem importância e irritado comigo e com outros sem uma causa real, o que eu faria?</h3>
                </div>
                <p>A- Trataria o amigo com cautela, supondo que ele estivesse com problemas passageiros, que não são da minha competência.</p>
                <input type="radio" name="webmaster17b" value="1" onClick={e => defineInputRadioAbaixoComplementar17(e)}/>
                <input type="radio" name="webmaster17b" value="2" onClick={e => defineInputRadioAbaixoComplementar17(e)}/>
                <input type="radio" name="webmaster17b" value="3" onClick={e => defineInputRadioAbaixoComplementar17(e)}/>
                <input type="radio" name="webmaster17b" value="4" onClick={e => defineInputRadioAbaixoComplementar17(e)}/>
                <input type="radio" name="webmaster17b" value="5" onClick={e => defineInputRadioAbaixoComplementar17(e)}/>
                <p>B- Trataria de falar com ele a respeito e lhe mostraria como seu comportamento estava afetando as pessoas.</p>
                <input type="radio" name="webmaster17" value="1" onClick={e => defineInputRadioComplementar17(e)}/>
                <input type="radio" name="webmaster17" value="2" onClick={e => defineInputRadioComplementar17(e)}/>
                <input type="radio" name="webmaster17" value="3" onClick={e => defineInputRadioComplementar17(e)}/>
                <input type="radio" name="webmaster17" value="4" onClick={e => defineInputRadioComplementar17(e)}/>
                <input type="radio" name="webmaster17" value="5" onClick={e => defineInputRadioComplementar17(e)}/>
            </div>
            <div className="questionario-18">
                <div className="cabecalho-pergunta">
                    <h3>18- Se certos hábitos de um amigo começassem a me desagradar, a ponto de afetar o prazer que sentia na sua companhia, o que eu faria?</h3>
                </div>
                <p>A- Não diria nada diretamente, mas faria perceber os meus sentimentos, ignorando-o cada vez que manifestasse os hábitos que me desagradam.</p>
                <input type="radio" name="webmaster18b" value="1" onClick={e => defineInputRadioAbaixoComplementar18(e)}/>
                <input type="radio" name="webmaster18b" value="2" onClick={e => defineInputRadioAbaixoComplementar18(e)}/>
                <input type="radio" name="webmaster18b" value="3" onClick={e => defineInputRadioAbaixoComplementar18(e)}/>
                <input type="radio" name="webmaster18b" value="4" onClick={e => defineInputRadioAbaixoComplementar18(e)}/>
                <input type="radio" name="webmaster18b" value="5" onClick={e => defineInputRadioAbaixoComplementar18(e)}/>
                <p>B- Manifestaria os meus sentimentos de maneira aberta e franca, visando manter nossa amizade agradável e com satisfação.</p>
                <input type="radio" name="webmaster18" value="1" onClick={e => defineInputRadioComplementar18(e)}/>
                <input type="radio" name="webmaster18" value="2" onClick={e => defineInputRadioComplementar18(e)}/>
                <input type="radio" name="webmaster18" value="3" onClick={e => defineInputRadioComplementar18(e)}/>
                <input type="radio" name="webmaster18" value="4" onClick={e => defineInputRadioComplementar18(e)}/>
                <input type="radio" name="webmaster18" value="5" onClick={e => defineInputRadioComplementar18(e)}/>
            </div>
            <div className="questionario-19">
                <div className="cabecalho-pergunta">
                    <h3>19- Em uma discussão sobre o comportamento com um bom amigo, o que eu faria?</h3>
                </div>
                <p>A- Evitaria mencionar seus defeitos e imperfeições de modo a não ferir seus sentimentos.</p>
                <input type="radio" name="webmaster19b" value="1" onClick={e => defineInputRadioAbaixoComplementar19(e)}/>
                <input type="radio" name="webmaster19b" value="2" onClick={e => defineInputRadioAbaixoComplementar19(e)}/>
                <input type="radio" name="webmaster19b" value="3" onClick={e => defineInputRadioAbaixoComplementar19(e)}/>
                <input type="radio" name="webmaster19b" value="4" onClick={e => defineInputRadioAbaixoComplementar19(e)}/>
                <input type="radio" name="webmaster19b" value="5" onClick={e => defineInputRadioAbaixoComplementar19(e)}/>
                <p>B- Apontaria os seus defeitos e imperfeições de forma que ele pudesse melhorar sua habilidade no trato com as pessoas.</p>
                <input type="radio" name="webmaster19" value="1" onClick={e => defineInputRadioComplementar19(e)}/>
                <input type="radio" name="webmaster19" value="2" onClick={e => defineInputRadioComplementar19(e)}/>
                <input type="radio" name="webmaster19" value="3" onClick={e => defineInputRadioComplementar19(e)}/>
                <input type="radio" name="webmaster19" value="4" onClick={e => defineInputRadioComplementar19(e)}/>
                <input type="radio" name="webmaster19" value="5" onClick={e => defineInputRadioComplementar19(e)}/>
            </div>
            <div className="questionario">
                <div className="cabecalho-pergunta">
                    <h3>20- Sabendo que poderia ser designado para um importante cargo dentro de nosso grupo e percebendo que meus amigos começavam a mudar de atitude comigo, o que eu faria?</h3>
                </div>
                <p>A- Discutiria minhas limitações com meus amigos, afim de que pudesse descobrir aspectos nos quais devo melhorar.</p>
                <input type="radio" name="webmaster20" value="1" onClick={e => defineInputRadioComplementar20(e)}/>
                <input type="radio" name="webmaster20" value="2" onClick={e => defineInputRadioComplementar20(e)}/>
                <input type="radio" name="webmaster20" value="3" onClick={e => defineInputRadioComplementar20(e)}/>
                <input type="radio" name="webmaster20" value="4" onClick={e => defineInputRadioComplementar20(e)}/>
                <input type="radio" name="webmaster20" value="5" onClick={e => defineInputRadioComplementar20(e)}/>
                <p>B- Trataria de descobrir sozinho minhas imperfeições, de maneira que pudesse superá-las.</p>
                <input type="radio" name="webmaster20b" value="1" onClick={e => defineInputRadioAbaixoComplementar20(e)}/>
                <input type="radio" name="webmaster20b" value="2" onClick={e => defineInputRadioAbaixoComplementar20(e)}/>
                <input type="radio" name="webmaster20b" value="3" onClick={e => defineInputRadioAbaixoComplementar20(e)}/>
                <input type="radio" name="webmaster20b" value="4" onClick={e => defineInputRadioAbaixoComplementar20(e)}/>
                <input type="radio" name="webmaster20b" value="5" onClick={e => defineInputRadioAbaixoComplementar20(e)}/>
            </div>
            <button className="btn btn-success" onClick={() => calculaQuestionario()}>Salvar</button>
        </div>
    );
}

export default Questionario;