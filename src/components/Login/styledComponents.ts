import tw, { styled } from "twin.macro";

export const MainContainer = styled.div`
  ${tw`flex justify-center items-center bg-black min-h-screen`}
`;
export const LoginFormContainer = styled.div`
  ${tw`p-8 bg-zinc-800 flex flex-col justify-center items-center  sm:w-full md:w-1/4 text-white	rounded-lg sm:m-2`}
`;

export const WebisteLogoContainer = styled.div`
  ${tw`w-full flex justify-center items-center m-2 p-2`}
`;

export const Form = styled.form`
  ${tw`flex justify-center flex-col w-full p-2`}
`;

export const ErrorMessageText = styled.p`
  color: #ff0b37;
`;

export const WebisteImg = styled.img`
  ${tw`w-3/5 h-14`}
`;

export const LoginBtn = styled.button`
  ${tw`h-10 mt-12 rounded-md border-0 text-white font-medium cursor-pointer text-center flex justify-center items-center bg-indigo-600`}
`;

export const InputLabel = styled.label`
  ${tw`flex  grow mt-10 text-sm leading-4`}
`;

export const Input = styled.input`
  ${tw`grow w-full h-10 p-2 border-[1px] border-solid border-[#7e858e] mt-1 rounded-sm bg-transparent text-white`};
`;
