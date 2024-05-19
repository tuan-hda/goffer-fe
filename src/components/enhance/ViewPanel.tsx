const ViewPanel = () => {
    return (
        <div className="h-full flex-1 self-start overflow-hidden">
            <iframe
                src="https://docs.google.com/gview?url=https://res.cloudinary.com/doxsstgkc/image/upload/v1714842471/goffer/cv___software_engineer___hoang_dinh_anh_tuan_pdf_1714842469050.pdf&embedded=true"
                className="-m-4 h-[calc(100%+32px)] w-[calc(100%+32px)]"
            ></iframe>
        </div>
    );
};

export default ViewPanel;
