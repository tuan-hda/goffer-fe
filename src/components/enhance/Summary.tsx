import { TbSparkles } from 'react-icons/tb';

const Summary = () => {
    return (
        <div className="rounded-xl shadow-small">
            <div className="flex h-10 items-center gap-2 rounded-t-xl bg-[#333] px-5 font-semibold text-white">
                <p className="font-semibold">Summary</p>
                <TbSparkles className="text-lg" />
            </div>

            <div className="mt-3 px-5 pb-5 pt-2">
                <p className="mb-1 font-semibold underline">Your profile</p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus ante at erat elementum
                posuere. Maecenas interdum aliquet est, in egestas nisi cursus sed. Maecenas non molestie tortor, vitae
                fringilla ligula. Sed sed turpis sed ex interdum mattis a et enim. Curabitur quam turpis, vestibulum
                quis risus in, aliquam ullamcorper purus.
                <p className="mb-2 mt-4 font-semibold underline">Extracted keywords</p>
                <div className="flex flex-wrap gap-2">
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Loremawf</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Loreawfem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Loremawf</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                    <div className="rounded-xl border px-3 py-1 text-xs">Lorem</div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
