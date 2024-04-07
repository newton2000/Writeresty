const HomeHead = () => {
  return (
    <div className="flex items-center justify-center bg-black border-b-[1px] border-zinc-700">
      <div className="container flex flex-col gap-5 max-w-[1192px] py-[40px] mx-[24px] sm:mx-[64px]">
        <h2 className="text-[52px] leading-[62px] sm:text-[72px] sm:leading-[72px] text-white">Write your story</h2>
        <span className="text-[16px] sm:text-[24px] text-white inline-block max-w-[100%] sm:max-w-[50%]">
          Discover stories, see what people are writing, and share your story.
        </span>
        <button
          className="btn bg-white text-black hover:bg-gray-300 max-w-[max-content] min-h-[40px] h-[40px] mt-5 rounded-[32px] px-5"
          onClick={() => {
            const openModal: HTMLElement | null = document.getElementById('sign_up_modal')
            if (openModal instanceof HTMLDialogElement) {
              openModal.showModal()
            }
          }}
        >Start Writing</button>
      </div>
    </div>
  )
}

export default HomeHead