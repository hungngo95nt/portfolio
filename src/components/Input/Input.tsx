import React from 'react';
import styled from 'styled-components';
import spacings from '@styleguide/theme/spacings';
import colors from '@styleguide/theme/colors';
import { fontSize, fontWeight, lineHeight } from '@styleguide/theme/fonts';
import { Flex, Text } from '@styleguide/components';
import breakpoints from '@styleguide/theme/breakpoints';

const StyledWrapper = styled.div`
  width: 100%;
  margin-bottom: ${spacings.semilarge};

  .main-wrapper {
    width: 100%;
    align-items: center;
    border: 1px solid ${(props: any) => (props.error ? colors.red : colors.gray)};
    border-radius: 4px;
    overflow: hidden;
  }
  .icon-wrapper {
    width: ${spacings.giant};
    align-items: center;
    justify-content: center;
    padding: 0 ${spacings.base};
    order: ${(props: any) => (props.iconToRight ? 2 : 'initial')};
  }

  .error-msg {
    width: 100%;
    display: block;
    margin-top: ${spacings.micro};
    color: ${colors.red};
  }
`;

const StyledInnerInput = styled.input<any>`
  width: 100%;
  margin: 0;
  padding: ${spacings.tiny} ${spacings.base};
  padding-left: ${(props: any) => (props.icon ? '0px' : spacings.base)};
  color: ${colors.black};
  font-weight: ${fontWeight.regular};
  font-size: ${fontSize.regular};
  line-height: ${lineHeight.regular};

  &::placeholder {
    font-weight: ${fontWeight.regular};
    font-size: ${fontSize.regular};
    line-height: ${lineHeight.regular};
    color: ${colors.darkGray};
  }
`;

type TProps = {
  tag?: any;
  icon?: any;
  leftIcon?: boolean;
  rightIcon?: boolean;
  className?: string;
  errorMsg?: string;
  error?: boolean;
  value?: string;
  type?: string;
  placeholder?: string;
  onChange?: (params: string) => any;
  [key: string]: any;
};

const Input: React.FC<TProps> = React.memo((props: TProps) => {
  const {
    icon,
    leftIcon,
    tag,
    rightIcon,
    onChange = () => '',
    className,
    errorMsg,
    value,
    error,
    type = 'text',
    placeholder,
    children,
    ...rest
  } = props;

  const handleInputChange = (e) => {
    if (type === 'file') {
      return onChange(e.target.files[0]);
    }
    return onChange(e.target.value);
  };

  return (
    <StyledWrapper
      as={tag}
      className={className || 'input'}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      error={error}
    >
      <Flex className="main-wrapper">
        {icon && (
          <Flex tag="p" className="icon-wrapper">
            {icon}
          </Flex>
        )}
        <StyledInnerInput
          placeholder={placeholder}
          onChange={handleInputChange}
          type={type}
          icon={icon}
          value={value}
          {...rest}
        />
        {children}
      </Flex>
      {error && errorMsg && <Text className="error-msg">{errorMsg}</Text>}
    </StyledWrapper>
  );
});

export default Input;
export { Input };
