// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

type DownArrowProps = React.SVGAttributes<SVGElement> & {
  color?: string;
};

export const DownArrowIcon: React.FC<DownArrowProps> = ({
  width = "18",
  height = "10",
  color = "currentColor",
  ...restProps
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 10"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        d="M16.9551 0.616471C16.7207 0.382133 16.4028 0.250488 16.0713 0.250488C15.7399 0.250488 15.422 0.382133 15.1876 0.616471L9.00007 6.80397L2.81258 0.61647C2.57683 0.388773 2.26108 0.262779 1.93333 0.265627C1.60559 0.268475 1.29207 0.399937 1.06031 0.631697C0.828552 0.863457 0.697092 1.17697 0.694244 1.50472C0.691397 1.83246 0.81739 2.14822 1.04509 2.38397L8.11633 9.45522C8.35073 9.68956 8.66862 9.8212 9.00007 9.8212C9.33153 9.8212 9.64941 9.68956 9.88382 9.45522L16.9551 2.38397C17.1894 2.14956 17.321 1.83168 17.321 1.50022C17.321 1.16877 17.1894 0.850881 16.9551 0.616471Z"
        fill="#FAF1E4"
      />
    </svg>
  );
};
