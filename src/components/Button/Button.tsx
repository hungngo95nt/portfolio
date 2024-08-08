// import React from 'react';
// import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';
// import spacings from '@styleguide/theme/spacings';
// import { backgroundColors, textColors, backgroundHover, borderColors } from './settings';
// import colors from '@styleguide/theme/colors';
// import { fontWeight, fontSize, lineHeight } from '@styleguide/theme/fonts';
// import Box from '../Box';
// import { HorizontalLoader } from '@styleguide/graphics';
// import breakpoints from '@styleguide/theme/breakpoints';

// const StyledWrapper = styled(Box)`
//   width: ${(props: any) => props.width || '100%'};

//   a,
//   button {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
//     width: 100%;
//     padding: ${(props: any) => props.padding || `${spacings.small} 0`};
//     color: ${(props: any) => textColors[props.$color] || colors.white};
//     background-color: ${(props: any) =>
//       props.disabled
//         ? colors.lightGray
//         : backgroundColors[props.$color] || backgroundColors.primary};
//     border-radius: 4px;
//     border: 1px solid
//       ${(props: any) =>
//         props.disabled ? colors.lightGray : borderColors[props.$color] || borderColors.primary};
//     transition: all 0.2s ease;

//     ${(props: any) => props.disabled && `pointer-events: none`};

//     @media screen and (max-width: ${breakpoints.medium}px) {
//       padding: ${spacings.tiny} 0;
//     }

//     .loader-icon {
//       margin: 0;
//     }

//     span {
//       z-index: 1;
//       font-size: ${fontSize.base};
//       line-height: ${lineHeight.base};
//       font-weight: ${fontWeight.medium};
//     }

//     @media screen and (max-width: ${breakpoints.tiny}px) {
//       span {
//         font-size: ${fontSize.small};
//         line-height: ${lineHeight.small};
//       }
//     }

//     svg {
//       z-index: 1;
//       order: ${(props: any) => (props.rightIcon ? 2 : 'initial')};
//       ${(props: any) =>
//         props.rightIcon ? `margin-left: ${spacings.tiny}` : `margin-right: ${spacings.tiny}`};

//       @media screen and (max-width: ${breakpoints.medium}px) {
//         ${(props: any) =>
//           props.rightIcon ? `margin-left: ${spacings.micro}` : `margin-right: ${spacings.micro}`};
//       }
//     }

//     .panel {
//       z-index: 1;
//       display: block;
//       position: absolute;
//       left: 0;
//       top: 0;
//       width: 100%;
//       height: 100%;
//       background: transparent;
//       border-radius: 4px;
//       transition: background 0.2s ease;
//     }

//     &:hover,
//     &:active {
//       border-color: ${(props: any) => backgroundHover[props.$color]};
//       ${(props: any) =>
//         props.$color === 'secondary' &&
//         css`
//           color: ${colors.white};
//           background-color: ${(props: any) => backgroundHover[props.$color]};
//         `}
//       .panel {
//         background-color: ${(props: any) => backgroundHover[props.$color]};
//       }
//     }
//   }
// `;

// type TProps = {
//   children?: any;
//   to?: string;
//   isLink?: boolean;
//   color?: string;
//   className?: string;
//   error?: boolean;
//   errorMsg?: string;
//   icon?: any;
//   type?: any;
//   leftIcon?: boolean;
//   rightIcon?: boolean;
//   isLoading?: boolean;
//   disabled?: boolean;
//   [key: string]: any;
// };

// const Button = (props: TProps) => {
//   const {
//     onClick,
//     isLink,
//     children,
//     icon,
//     isLoading,
//     className = 'button',
//     type,
//     to = '/',
//     color = 'primary',
//     ...rest
//   } = props;

//   const renderInnerContent = () => (
//     <>
//       <Box tag="p" className="panel" />
//       {isLoading ? (
//         <HorizontalLoader className="loader-icon" width={80} height={20} color={colors.white} />
//       ) : (
//         <>
//           {icon}
//           <span>{children}</span>
//         </>
//       )}
//     </>
//   );

//   return (
//     <StyledWrapper $color={color} className={className} {...rest}>
//       {isLink ? (
//         <Link to={to}>{renderInnerContent()}</Link>
//       ) : (
//         <button onClick={onClick} type={type}>
//           {renderInnerContent()}
//         </button>
//       )}
//     </StyledWrapper>
//   );
// };

// export default Button;
// export { Button };
