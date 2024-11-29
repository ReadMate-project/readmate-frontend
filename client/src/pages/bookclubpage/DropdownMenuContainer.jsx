import React, { useState } from 'react';
import S from './style';

const DropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('전체');
    const [isOpen, setIsOpen] = useState(false);

    const options = ['전체', '모집 중', '진행 중'];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <S.DropdownContainer>
            <S.SelectedOption onClick={() => setIsOpen(!isOpen)}>
                {selectedOption} ▽
            </S.SelectedOption>
            {isOpen && (
                <S.OptionsContainer>
                    {options.map((option, index) => (
                        <S.Option key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </S.Option>
                    ))}
                </S.OptionsContainer>
            )}
        </S.DropdownContainer>
    );
};

export default DropdownMenu;
