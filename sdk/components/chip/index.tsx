export const Chip = ({ text }: { text: string | number }) => {
    return (
        <div className='py-[6px] px-[14px] rounded-[40px] bg-primary-dark-200/25 text-primary-light font-medium leading-[18px]'>
            {text}
        </div>
    )
}
