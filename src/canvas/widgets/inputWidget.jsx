import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { CanvasContext } from "../CanvasContext";
import styled, { StyleSheetManager } from "styled-components";


const StyledInput = styled.div`
    position: absolute;
    cursor: grab;
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    background-color: ${(props) => props.$backgroundColor};
    color: ${(props) => props.$fontColor};
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: ${(props) => props.$fontSize};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: ${(props) => props.$border};
    border-color: ${(props) => props.$borderColor};
    border-radius: ${(props) => props.$borderRadius};
    ::placeholder {
        color: ${(props) => props.$placeholderFontColor};
    }
`;

// div para representar o background color além das rounded borders
const OutsideBackgroundColor = styled.div`
    position: absolute;
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    background-color: ${(props) => props.$outsideBackgroundColor};
`;

function InputWidget({ id }) {
    // Usando o contexto para obter as funções e estados necessários
    const {
        selectedWidgetID,
        setSelectedWidgetID,
        selectedWidgetContent,
        setSelectedWidgetContent,
        selectedWidgetHeight,
        setSelectedWidgetHeight,
        selectedWidgetWidth,
        setSelectedWidgetWidth,
        selectedWidgetFontSize,
        setSelectedWidgetFontSize,
        selectedWidgetBorder,
        setSelectedWidgetBorder,
        selectedWidgetBorderColor,
        setSelectedWidgetBorderColor,
        selectedWidgetBackgroundColor,
        setSelectedWidgetBackgroundColor,
        setSelectedWidgetPosition,
        selectedWidgetFontColor,
        setSelectedWidgetFontColor,
        selectedWidgetBorderRadius,
        setSelectedWidgetBorderRadius,
        selectedWidgetOutsideBackgroundColor,
        setSelectedWidgetOutsideBackgroundColor,
        canvasBackgroundColor,
        selectionOutsideBackgroundColor_SameAsCanvas,
        setSelectionOutsideBackgroundColor_SameAsCanvas,
        setSelectedWidgetType,
        selectedWidgetPlaceholderFontColor,
        setSelectedWidgetPlaceholderFontColor,
    } = useContext(CanvasContext);

    const [inputContent, setInputContent] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState("Placeholder");
    const [inputPosition, setInputPosition] = useState({ x: 0, y: 0 });
    const [inputHeight, setInputHeight] = useState("30px");
    const [inputWidth, setInputWidth] = useState("195px");
    const [inputBorder, setInputBorder] = useState("2px solid");
    const [inputBorderColor, setInputBorderColor] = useState("#000000");
    const [inputBorderRadius, setInputBorderRadius] = useState("6px");
    const [inputBackgroundColor, setInputBackgroundColor] = useState("#F0F0F0");
    const [inputOutsideBackgroundColor, setInputOutsideBackgroundColor] = useState(canvasBackgroundColor);
    const [inputFontSize, setInputFontSize] = useState("14px");
    const [inputFontColor, setInputFontColor] = useState("#000000");
    const [inputPlaceholderFontColor, setInputPlaceholderFontColor] = useState("#454545");

    // is active checkbox para opções opicionais
    const [inputOutsideBackgroundColor_SameAsCanvas, setInputOutsideBackgroundColor_SameAsCanvas] = useState(true);

    // Atualizando o conteúdo do input quando o ID do widget selecionado tem match com o ID deste input
    useEffect(() => {
        if (selectedWidgetID === id) {
            setInputPlaceholder(selectedWidgetContent);
            setInputHeight(selectedWidgetHeight);
            setInputWidth(selectedWidgetWidth);
            setInputBorder(selectedWidgetBorder);
            setInputBorderColor(selectedWidgetBorderColor);
            setInputBorderRadius(selectedWidgetBorderRadius);
            setInputBackgroundColor(selectedWidgetBackgroundColor);
            setInputOutsideBackgroundColor(selectedWidgetOutsideBackgroundColor);
            setInputFontSize(selectedWidgetFontSize);
            setInputFontColor(selectedWidgetFontColor);
            setInputPlaceholderFontColor(selectedWidgetPlaceholderFontColor)

            // valores de checkbox de opções opcionais
            setInputOutsideBackgroundColor_SameAsCanvas(selectionOutsideBackgroundColor_SameAsCanvas);

            // armazenar o componente no localStorage
            storageSerializedComponent();
        }
    }, [
        selectedWidgetID,
        inputPosition,
        selectedWidgetContent,
        selectedWidgetHeight,
        selectedWidgetWidth,
        selectedWidgetBorder,
        selectedWidgetBorderColor,
        selectedWidgetBackgroundColor,
        selectedWidgetOutsideBackgroundColor,
        selectedWidgetFontSize,
        selectedWidgetFontColor,
        selectedWidgetPlaceholderFontColor,
        selectedWidgetBorderRadius,
        selectionOutsideBackgroundColor_SameAsCanvas,
    ]);

    // caso a cor do canvas mude, e a opção de manter a cor do botão igual a do canvas esteja ativa, a cor do outside background é atualizada
    useEffect(() => {
        if (inputOutsideBackgroundColor_SameAsCanvas == true) {
            setInputOutsideBackgroundColor(canvasBackgroundColor);
        }
    }, [canvasBackgroundColor]);

    // Função para definir este botão como o botão selecionado
    const setAsSelectedWidget = () => {
        setSelectedWidgetType("input");
        setSelectedWidgetID(id);
        setSelectedWidgetContent(inputPlaceholder);
        setSelectedWidgetPosition(inputPosition);
        setSelectedWidgetHeight(inputHeight);
        setSelectedWidgetWidth(inputWidth);
        setSelectedWidgetBackgroundColor(inputBackgroundColor);
        setSelectedWidgetOutsideBackgroundColor(inputOutsideBackgroundColor);
        setSelectedWidgetFontSize(inputFontSize);
        setSelectedWidgetFontColor(inputFontColor);
        setSelectedWidgetPlaceholderFontColor(inputPlaceholderFontColor)
        setSelectedWidgetBorder(inputBorder);
        setSelectedWidgetBorderColor(inputBorderColor);
        setSelectedWidgetBorderRadius(inputBorderRadius);

        // valores de checkbox de opções opcionais
        setSelectionOutsideBackgroundColor_SameAsCanvas(inputOutsideBackgroundColor_SameAsCanvas);
    };

    // Função para limpar o conteúdo do input quando ele perde o foco
    const clearInputOnBlur = () => {
        setInputContent("");
    };

    // função para atualizar as coordenadas no contexto CanvasContext
    const updateInputPosition = (e, data) => {
        setInputPosition({ 
            x: Math.round(data.x / 10) * 10, 
            y: Math.round(data.y / 10) * 10 
          });
    };

    const storageSerializedComponent = () => {
        // Cria um objeto com todas as propriedades e seus valores atuais
        const inputState = {
            id,
            widgetType : "input",
            inputContent,
            inputPosition,
            inputHeight,
            inputWidth,
            inputBorder,
            inputBorderColor,
            inputBorderRadius,
            inputBackgroundColor,
            inputOutsideBackgroundColor,
            inputFontSize,
            inputFontColor,
            inputPlaceholder,
            inputPlaceholderFontColor,
            inputOutsideBackgroundColor_SameAsCanvas,
        };
    
        // Converte o objeto de estado para uma string JSON
        const inputStateString = JSON.stringify(inputState);
    
        // Grava a string JSON no localStorage usando o ID do widget como chave
        localStorage.setItem(`WidgetState-${id}`, inputStateString);
    
      }

    return (
        <StyleSheetManager shouldForwardProp={() => true}>
            <Draggable bounds="parent" position={inputPosition} onStop={updateInputPosition}>
                <OutsideBackgroundColor $outsideBackgroundColor={inputOutsideBackgroundColor} $height={inputHeight} $width={inputWidth}>
                    <StyledInput
                        $height={inputHeight}
                        $width={inputWidth}
                        $backgroundColor={inputBackgroundColor}
                        $fontSize={inputFontSize}
                        $fontColor={inputFontColor}
                        $border={inputBorder}
                        $borderColor={inputBorderColor}
                        $borderRadius={inputBorderRadius}
                        onClick={setAsSelectedWidget}
                        $placeholderFontColor={inputPlaceholderFontColor}
                    >
                        <input
                            type="text"
                            placeholder={inputPlaceholder}
                            value={inputContent}
                            onBlur={clearInputOnBlur}
                            onChange={(e) => setInputContent(e.target.value)}
                            style={{
                                width: "100%",
                                height: "100%",
                                border: "none",
                                background: "none",
                                textAlign: "center",
                                color: inputFontColor,
                                fontSize: inputFontSize,
                            }}
                        />
                    </StyledInput>
                </OutsideBackgroundColor>
            </Draggable>
        </StyleSheetManager>
    );
}

export default InputWidget;
